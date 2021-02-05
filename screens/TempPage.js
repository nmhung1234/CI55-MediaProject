const style = `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: black;
}
  /* -------container------ */
.all {
        background-image: linear-gradient(
        40deg,
        rgba(85, 67, 243, 0.253) 30%,
        rgba(243, 11, 11, 0.342)
        ),
        url("./images/backTemp.jpg");
        background-attachment: fixed;
    background-position-y: 80%;
}
.container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    /* border: 1px solid black; */
}


  /* --------navigation------- */
.container .nav {
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: flex-end;
}
.container .select {
    height: 30px;
    margin: 10px 20px 0 0;
    border: none;
    outline: none;
    border-radius: 5px;
}
.container input[type=text]{
    height: 30px;
    margin: 10px 20px 0 0;
    border: none;
    outline: none;
    border-radius: 5px;
    padding-left: 10px;
}
.container .nav i{
    font-size: 20px;
    line-height: 50px;
    color: white;
    
}

  /* --------component--------- */
.container .component {
    /* border:  1px solid black; */
    height: 100vh;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.container .component .component-child {
    /* border:  1px solid black; */
    height: 30%;
    width: 70%;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px 2px rgba(0, 0, 0, 0.164);
    background-color: rgba(255, 255, 255, 0.219);
    transition: all 0.3s ease-in;
}
.container .component .component-child:hover {
    transform: translateY(-15px) scale(1.05);
    transition: all 0.4s ease-out;
}
.container .component .component-child a{
    /* border:  1px solid black; */
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 10px;
    display: flex;
  }
  .container .component .component-child img{
    /* border:  1px solid black; */
    height: 100%;
    width: 40%;
    border-radius: 10px 0  0 10px;
  }
  .container .component .component-child p{
    /* border:  1px solid black; */
    height: 100%;
    width: 100%;
    line-height: 100%;
    /* margin: 0 auto; */
    /* text-align: center; */
    text-align: justify;
    padding: 20px 0 0 20px;
    
  }
   
  







`;

class TempPage extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.idDashBoard = localStorage.getItem('idDashBoard');
        if (this.idDashBoard === '0') {
            db.collection('premiere')
                .get()
                .then((res) => {
                    const child = res.docs.map(
                        (doc) =>
                            `  <div class="component-child">
                        <a id-temp-page = ${doc.id}>
                            <img src="${doc.data().img}" alt="Ảnh bài viết" >
                            <p>${doc.data().title}</p>
                        </a>
            
            
                    </div>`
                    );
                    this.shadowDom.innerHTML = `
        
                    <style>
                        ${style}
                    
                    </style>
            
            
                <div class="all">
                    <div class="container">
                        <div class="nav">
                            <select class="select">
                                <option class="options" value="0">Tất cả bài viết</option>
                                <option class="options" value="1">Top views</option>
                                <option class="options" value="2">Top hữu ích</option>
                                <option class="options" value="3">Top đóng góp</option>
                            </select>
                            <input type="text" placeholder="Tìm kiếm...">
                            <i class="fas fa-search"></i>
                        </div>
            
                        <div class="component">
                            
                           ${child.join('')}
                            
                        </div>
                    </div>
                </div>
                    
                    
                    `;
                    this.shadowDom.querySelectorAll('a').forEach((a) => {
                        a.onclick = function (e) {
                            e.preventDefault();
                            localStorage.setItem('idTempPage', this.getAttribute('id-temp-page'));
                            router.navigate('/content');
                        };
                    });
                });
        } else {
            this.shadowDom.innerHTML = `
        
            <style>
                ${style}
            
            </style>
    
    
        <div class="all">
            <div class="container">
                <div class="nav">
                    <select class="select">
                        <option class="options" value="0">Tất cả bài viết</option>
                        <option class="options" value="1">Top views</option>
                        <option class="options" value="2">Top hữu ích</option>
                        <option class="options" value="3">Top đóng góp</option>
                    </select>
                    <input type="text" placeholder="Tìm kiếm...">
                    <i class="fas fa-search"></i>
                </div>
    
                <div class="component">
                <div class="component-child">
                <a>
                    <img src="" alt="Ảnh bài viết" >
                    <p>Nguyễn Mạnh Hùng</p>
                </a>
    
    
            </div>
                   
                    
                </div>
            </div>
        </div>
            
            
            `;
        }
    }
}

window.customElements.define('temp-page', TempPage);
