import './screens/Dashboard.js';
import './screens/TempPage.js';
import './screens/Content.js';



const app = document.getElementById('app');

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
    '*':  () => {
        redirect();
    }
  })
  .resolve();



function redirect(screen) {
    switch (screen) {
        case 'temp':
            app.innerHTML = `<temp-page></temp-page>`
            break;
        case 'content':
            app.innerHTML = `<content-page></content-page>`;
            break;
        default:
            app.innerHTML = `<dashboard-page></dashboard-page>`
            break;
    }
}


export default router;