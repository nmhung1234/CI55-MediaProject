import redirect from '../index.js'



const style = `

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Noto Sans HK", sans-serif;
    }
    #mainweb {
        width: 100%;
        height: 100vh;
        /* border:  1px solid black; */
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-image: linear-gradient(
            -20deg,
            rgba(4, 70, 190, 0.589),
            rgba(218, 7, 7, 0.39)
            ),
            url("./images/backDashboard.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .main-option-link {
        display: block;
        text-decoration: none;
        color: black;
    }
    .main-option:active{
        transform: translateY(5px);
        transition: all 0.1ms !important;
    }
    .main-option {
        display: block;
        height: 70px;
        width: 250px;
        /* border:  1px solid black; */
        line-height: 70px;
        text-align: center;
        border-radius: 40px;
        margin: 20px;
        background-color: white;
        box-shadow: 0px 0px 20px 1px rgba(99, 99, 99, 0.63);
        transition: all 0.8s;
    }
    .main-option:hover {
        height: 90px;
        width: 270px;
        line-height: 90px;
        transition: all 0.8s;
        font-size: 20px;
        background-image: linear-gradient(
            -20deg,
            rgba(4, 70, 190, 0.589),
            rgba(7, 218, 53, 0.39)
        );
        color: white;
        font-weight: 700;
    }

    .main-option-link:hover {
        color: white;
    }

    #mainweb .animate1 {
        opacity: 1;
        animation: moving1 0.5s ease-out;
    }
    #mainweb .animate2 {
        animation: moving2 0.5s ease-out;
    }

    @keyframes moving1 {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
        }
        @keyframes moving2 {
        0% {
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }







`




class DashBoard extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
        
        <style>
            ${style}
        
        </style>


        <div id="mainweb">
            <div class="main-option animate1" id="0">
                <a class="main-option-link premiere-pro" href="./ProjectMain/tempPage/TempPage.html" target="_blank">
                Premiere Pro
                </a>
            </div>

            <div class="main-option animate2" id="1">
                <a class="main-option-link after-effect" href="./ProjectMain/tempPage/TempPage.html" target="_blank">
                PhotoShop
                </a>
            </div>

            <div class="main-option animate1" id="2">
                <a class="main-option-link photoshop" href="./ProjectMain/tempPage/TempPage.html" target="_blank">
                After Effects
                </a>
            </div>

            <div class="main-option animate2" id="3">
                    <a class="main-option-link adobe-illutrator" href="./ProjectMain/tempPage/TempPage.html" target="_blank">
                        Adobe Illustrator
                    </a>
            </div>
        </div>
        
        
        `;

        this.shadowDom.querySelectorAll('a').forEach(a => {
            a.onclick = (e) => {
                e.preventDefault();
                redirect('temp');
            }
        })
    }
}

window.customElements.define('dashboard-page', DashBoard)