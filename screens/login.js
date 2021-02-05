import { redirect } from '../index.js';
const style = `<style>


        * {
            box-sizing: border-box;
            font-family: 'Roboto Slab', serif;
        }

        .login {
            background-image: url('./images/background.jpg');
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
            top: 60%;
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
</style>`;
class login extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        ${style}
        <div class="login">
        <form id="form">
            <h2>Login</h2>
            
            <input-wrap type="text" err="" placeholder="Email" class="name"></input-wrap>

            <input-wrap type="password" err="" placeholder="Password" class="password"></input-wrap>
            
            <button class="btn">Login</button>
            <p class="createAcc">Don't have Account? Register</p>
        </form>
        </div>
        `;

        this._shadowDOM.querySelector('.btn').addEventListener('click', (e) => {
            e.preventDefault();
            const name = this._shadowDOM.querySelector('.name').value;
            const password = this._shadowDOM.querySelector('.password').value;

            let login = true;
            if (name.trim() == '') {
                this._shadowDOM.querySelector('.name').setAttribute('err', 'Vui lòng nhập Email');
                login = false;
            } else {
                this._shadowDOM.querySelector('.name').setAttribute('err', '');
            }

            if (password.trim() == '') {
                this._shadowDOM
                    .querySelector('.password')
                    .setAttribute('err', 'Vui lòng nhập mật khẩu');
                login = false;
            } else {
                this._shadowDOM.querySelector('.password').setAttribute('err', '');
            }

            if (login == true) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(name, password)
                    .then((res) => {
                        alert(
                            `Bạn đã đăng nhập thành công với tài khoản ${res.user.email} chúc bạn có kiến thức bổ ích với website`
                        );
                        router.navigate('/home');
                    })
                    .catch((err) => {
                        this._shadowDOM
                            .querySelector('.password')
                            .setAttribute('err', 'Sai tài khoản hoặc mật khẩu');
                    });
            }
        });

        this._shadowDOM.querySelector('.createAcc').addEventListener('click', (e) => {
            e.preventDefault();
            router.navigate('/register');
        });
    }
}
window.customElements.define('login-screen', login);
