import './screens/Dashboard.js';
import './screens/TempPage.js';
import './screens/Content.js';
import './screens/home.js';
import './screens/login.js';
import './screens/register.js';



// const app = document.getElementById('app');

//Router
// var root = null;
// var useHash = true;
// var hash = '#!'; 
// var router = new Navigo(root, useHash, hash);

// router
//     .on({
//         '/temp':  () => {
//             redirect('temp');
//         },
//         '/content':  () => {
//             redirect('content');
//         },
//         '*':  () => {
//             redirect();
//         }
//     })
//     .resolve();

    export function redirect(screen){
        if(screen == 'home'){
            document.querySelector('.app').innerHTML = `<dashboard-page></dashboard-page>`;
        }
    
        if(screen == 'register'){
            document.querySelector('.app').innerHTML = `<register-screen></register-screen>`;
        }
    
        if(screen == 'login'){
            document.querySelector('.app').innerHTML = `<login-screen></login-screen>`;
        }
    };
    redirect('login');
    // firebase.auth().onAuthStateChanged(function (user) {
    
    //     if(user){
    //         const usershow = {
    //             name: user.displayName,
    //             email: user.email,
    //             id: user.uid,
    //             verified: user.emailVerified
    //         }
    //         window.currentUser = usershow;
    //         if(currentUser.verified){
    //             redirect('home');
    
    //         }
    //         else{
    //             alert('Vui lòng xác nhận email')
    //             redirect('login');
    //         }
            
    //     } else {
    //         redirect('login');
    //     }
        
    // });

//Redirect function
// function redirect(screen) {
//     switch (screen) {
//         case 'temp':
//             app.innerHTML = `<temp-page></temp-page>`
//             break;
//         case 'content':
//             app.innerHTML = `<content-page></content-page>`;
//             break;
//         default:
//             app.innerHTML = `<dashboard-page></dashboard-page>`
//             break;
//     }
// }


// export default router;