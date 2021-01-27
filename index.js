import './screens/Dashboard.js';
import './screens/TempPage.js';
import './screens/Content.js';
import './screens/home.js';
import './screens/login.js';
import './screens/register.js';



const app = document.querySelector('#app');

//Router
var root = null;
var useHash = true;
var hash = '#!'; 
var router = new Navigo(root, useHash, hash);

router
    .on({
        '/temp':  () => {
            redirect('temp');
        },
        '/content':  () => {
            redirect('content');
        },
        '/login': () => {
            redirect('login');
        },
        '/register': () =>{
            redirect('register');
        },
        '/home': () =>{
            redirect('home');
        },
        '*':  () => {
            redirect();
        }
    })
    .resolve();

    export function redirect(screen){
        if(screen == 'home'){
            app.innerHTML = `<dashboard-page></dashboard-page>`;
        }
    
        if(screen == 'register'){
            app.innerHTML = `<register-screen></register-screen>`;
        }
    
        if(screen == 'login'){
            app.innerHTML = `<login-screen></login-screen>`;
        }
        if(screen == 'temp'){
            app.innerHTML = `<temp-page></temp-page>`;
        }
        if(screen == 'content'){
            app.innerHTML = `<content-page></content-page>`;
        }
    };
    redirect('login');
    firebase.auth().onAuthStateChanged(function (user) {
    
        if(user){
            const usershow = {
                name: user.displayName,
                email: user.email,
                id: user.uid,
                // verified: user.emailVerified
            }
            window.currentUser = usershow;
            // if(currentUser.verified){
                router.navigate('/home');
    
            // }
            // else{
            //     alert('Vui lòng xác nhận email')
            //     redirect('login');
            // }
            
        } else {
            router.navigate('/login');
        }
        
    });


export default router;