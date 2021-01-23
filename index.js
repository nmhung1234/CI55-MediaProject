import './screens/Dashboard.js';
import './screens/TempPage.js';
import './screens/Content.js';



const app = document.getElementById('app');


redirect();


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


export default redirect