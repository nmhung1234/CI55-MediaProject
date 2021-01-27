import '../component/input.js'
import {redirect} from '../index.js';
const style = `<style>

        * {
            box-sizing: border-box;
            font-family: 'Roboto Slab', serif;

        }
        .login {
            background-image: url('../images/background.jpg');
            background-size: cover;
            height: 100vh;
            width: 100vw;
            display: flex;

        }

        #form {
            background-image: linear-gradient(110deg, rgba(201, 169, 200, 0.9), rgba(250, 191, 155, 0.7));
            border-radius: 15px;
            box-shadow: 3px 3px 20px rgba(0,0,0, 0.1);
            text-align: center;
            position: absolute;
            top: 50%;
            left: 75%;
            transform: translate(-50%, -50%);
            padding: 0px 80px;
        }

        h2 {
            font-size: 40px;
            text-transform: uppercase;
            padding: 20px;
            color: #000;
            margin-bottom: 0;
        }

        button {
            padding: 15px;
            width: 120px;
            text-align: center;
            background: none;
            color: #000;
            font-size: 16px;
            margin: 20px 10px;
            border-radius: 24px;
            border: 2px solid #2ecc71;
            transition: 0.25s;
            outline: none;
        }

        button:hover {
            background-color: #2ecc71;
            color: #fff;
            cursor: pointer;
        }

        p {
            color: black;
            cursor: pointer;
            width:fit-content;
            margin: 0 auto;
            padding: 30px 0;
        }
        p:hover{
            color: #fff;
          }
</style>`
class register extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        ${style}
        <div class="login">
        <form id="form">
            <h2>Register</h2>
            
            <input-wrap type="text" err="" placeholder="Username" class="name"></input-wrap>
            <input-wrap type="email" err="" placeholder="Email" class="email"></input-wrap>
            <input-wrap type="password" err="" placeholder="Password" class="pass"></input-wrap>
            <input-wrap type="password" err="" placeholder="Confirm Password" class="cfpass"></input-wrap>
            
            <button class="btn">Register</button>
            <p>Have Account? Login</p>
        </form>
    </div>
        `
        this._shadowDOM.querySelector('.btn').addEventListener('click', (e) => {
            e.preventDefault();
            const name = this._shadowDOM.querySelector('.name').value;
            const email = this._shadowDOM.querySelector('.email').value;
            const pass = this._shadowDOM.querySelector('.pass').value;
            const cfpass = this._shadowDOM.querySelector('.cfpass').value;

            // chuẩn bị làm form validate
            let create = true;
            if(create){

            }
            if (name.trim() == '') {
                this._shadowDOM.querySelector('.name').setAttribute('err', "Vui lòng nhập tên");
                create = false;
            }else{
                this._shadowDOM.querySelector('.name').setAttribute('err', "");
                create = true;
            }

            if (email.trim() == '') {
                this._shadowDOM.querySelector('.email').setAttribute('err', "Vui lòng nhập Email");
                create = false;
            }
            else{
                this._shadowDOM.querySelector('.email').setAttribute('err', "");
                create = true;
            }

            if (pass.trim() == '') {
                this._shadowDOM.querySelector('.pass').setAttribute('err', "Vui lòng nhập Password");
                create = false;
            }
            else{
                this._shadowDOM.querySelector('.pass').setAttribute('err', "");
                create = true;
            }

            if (cfpass.trim() == '') {
                this._shadowDOM.querySelector('.cfpass').setAttribute('err', "Vui lòng nhập lại mật khẩu");
                create = false;
            }
            else{
                this._shadowDOM.querySelector('.cfpass').setAttribute('err', "");
                create = true;
            }

            if (pass.trim() !== cfpass.trim()) {
                this._shadowDOM.querySelector('.cfpass').setAttribute('err', "Mật khẩu không khớp");
                create = false;
            }
            else{
                this._shadowDOM.querySelector('.cfpass').setAttribute('err', "");
                create = true;
            }

            if (create == true) {
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                    .then((res) => {
                        
                        alert(`Đăng ký thành công tài khoản: ${res.displayName = name}`);

                        firebase.auth().currentUser.sendEmailVerification();
                        firebase.auth().currentUser.updateProfile({
                            displayName: name
                        });
                        
                    })
                    .catch((err) => {
                        // alert(err.message);
                    })
                    redirect('login');
            }
        })
        this._shadowDOM.querySelector('p').addEventListener('click',() => {
            redirect('login');
        })
    }
}
window.customElements.define('register-screen', register);