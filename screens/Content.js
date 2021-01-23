const style = `

/* -----------reset css-------- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Saira Condensed", sans-serif;
}

/* ------ container, re-used-------- */
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
  color: black;
}
/* ------------------------- */

/* --------- Body Left side -------- */
.container .left-side {
  width: 50%;
  height: 100%;
   border: 1px solid black; 
   background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://uppercasetheme.com/kendrick-bronson/wp-content/uploads/sites/29/demo-image-00012-960x960.jpg'); 
  background-size: cover;
}

.container .left-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container .left-side .nav {
  height: 50px;
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 40px 0;
}
.container .left-side .nav .author {
  line-height: 50px;
  padding: 0 30px;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 1px;
}
.container .left-side .nav .right-nav {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 13px;
  transition: all 0.8s;
}
.container .left-side .nav .right-nav:hover {
  cursor: pointer;
}
.container .left-side .nav .right-nav .menu {
  display: block;
  border: 1.5px solid rgba(255, 255, 255, 0.521);
  padding: 10px 25px;
  margin: 0 30px;
  transition: all 0.5s;
}
.container .left-side .nav .right-nav .menu:hover {
  background-color: white;
  color: black;
  transition: all 0.5s;
}
.container .left-side .nav .right-nav .search {
  display: flex;
  transition: all 0.5s;
}
.container .left-side .nav .right-nav .search:hover {
  color: rgb(179, 179, 179);
  transition: all 0.5s;
}
.container .left-side .nav .right-nav .search i {
  padding: 4px 10px 0 0;
  font-size: 13px;
}
.container .left-side .title-of-content {
  padding: 50px;
  font-size: 35px;
  font-weight: 900;
  color: white;
}

/* ------ Body right side -------- */
.container .right-side {
  width: 50%;
  height: 100%;
  /* border: 1px solid black; */
  padding: 40px;
  font-size: 22px;
  overflow: scroll;
}

.information {
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
  font-size: 12px;
  color: rgb(87, 87, 87);
}
.information p {
  padding-left: 150px;
}
.right-side .contribute-content {
  /* width: 100%; */
  height: 300px;
  /* border: 1px solid black; */
  padding: 30px 0;
  font-size: 30px;
  font-weight: 700;
}
.right-side .contribute-content input {
  padding: 10px;
  margin: 20px 0;
  border: none;
  outline: none;
  background-color: rgba(230, 230, 230, 0.404);
}
.right-side .contribute-content input[type="email"] {
  width: 250px;
}
.right-side .contribute-content .fa-paper-plane {
  font-weight: 300;
  font-size: 25px;
  padding-left: 10px;
  color: rgb(134, 134, 134);
}
.right-side .contribute-content .fa-paper-plane:hover {
  color: rgb(32, 101, 228);
  transition: all 0.3s;
}
.right-side .contribute-content textarea {
  width: 500px;
}
.right-side .content-detail {
  text-align: justify;
}

/* ------ footer -------- */
.footer {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  flex-wrap: wrap;
}
.footer .footer__col {
  width: 17%;
  color: black;
  padding: 10px;
}
.footer .footer__col::before {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin: 0 auto;
  background-color: orange;
}
.footer .for-beautiful {
  border-top: 1px solid black;
  padding: 10px;
  width: 90%;
  text-align: center;
}
.footer .for-beautiful .for-fun {
  width: 80%;
  display: inline;
  padding: 0 10px 0 10px;
  text-align: center;
  /* line-height: 13px; */
}
.footer .for-beautiful .tag {
  border-right: 2px solid black;
}

.comment-Container {
  /* border:  1px solid black; */
  width: 100%;
  /* height: 100px; */
  margin: 20px 0;
}
.render-comment {
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */
}
.comment-Container img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
  margin-top: 18px;
}
.comment-Container .send-comment input {
  outline: none;
  border: none;
  background-color: rgb(238, 238, 238);
  padding: 10px;
  width: auto;
  border-radius: 20px;
}
.comment-Container .send-comment button {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: rgb(132, 221, 248);
  padding: 10px 20px;
  border-radius: 6px;
  margin-left: 8px;
}

.comment-Container .name-and-comment {
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: blanchedalmond;
  border-radius: 20px;
  padding: 10px 5px;
  /* align-items: flex-end; */
}
.comment-Container .name-and-comment .del {
  cursor: pointer;
  align-self: flex-end;
  background-color: #dfe4ea;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 15px;
}
.render-comment .p-name {
  font-weight: 600;
}
.render-comment .p-comment {
  font-size: 17px;
}








`




class Content extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
        
        <style>
            ${style}
        
        </style>


        <div class="container">
        <!-- ----------bên trái ----------- -->
        <div class="left-side">
            <div class="nav">
                <div class="author">
                    <p>Nguyễn Hùng</p>
                </div>
                <div class="right-nav">
                    <div class="menu">MENU</div>
                    <div class="search">
                        <i class="fas fa-search">abc</i>
                        <p>SEARCH</p>
                    </div>
                </div>
            </div>
            <div class="title-of-content">
                <p>Khóc 1 dòng sông</p>
            </div>

        </div>

        <!-- --------bên phải -------- -->
        <div class="right-side">
            <div class="information">
                <div class="list-content">
                    <a href="../../Dashboard.html" target="_blank">Home</a> > <a class="name-content"
                        href="../tempPage/TempPage.html"></a>
                </div>
                <p class="date-public">
                    <i class="far fa-calendar-alt">&ensp;</i>12/10/2020
                </p>
                <p class="views"></p>

            </div>
            <div class="content-detail">
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </div>
            <iframe width="560" height="315" style="padding: 20px;" src="https://www.youtube.com/embed/H96ceHhGtD8"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>




            <!-- <a href="mailto:email@echoecho.com?subject=SweetWords">Send Email</a> -->
            <!-- <a href="mailto:email@echoecho.com?body=Please send me a copy of your new program!">Send Email</a> -->
            <!-- <a href="mailto:email@echoecho.com?subject=SweetWords &amp;body=Please send me a copy of your new program!">Email Me</a> -->
            <hr>

            <!-- -----comment---- -->

            <div class="comment-Container">
                <div class="send-comment">
                    <input id="input-name" type="text" placeholder="Nhập tên của bạn">
                    <input id="input-avatar" type="text" placeholder="Nhập địa chỉ ảnh...">
                    <input id="input-comment" type="text" placeholder="Viết bình luận...">
                    <button id="button-comment">Gửi</button>
                </div>
                <div class="all-comment">
                    <div class="render-comment">
                        <img src="https://static.toiimg.com/photo/72975551.cms" alt="">
                        <div class="name-and-comment">
                            <p>Nguyễn Văn A</p>
                            <p>Bài viết này hay quá lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                                facere provident consequuntur sequi ut sapiente suscipit iste, incidunt voluptas. Unde
                                laudantium, debitis non fuga aspernatur doloribus repudiandae! Consequuntur, dolore minima?
                            </p>
                            <p class="del">Xóa</p>

                        </div>
                    </div>
                    
    
                </div>

            </div>
            <hr>
            <div class="contribute-content">
                <p>Để lại bài viết, Tip, Trick, để phát triển cộng đồng tốt hơn</p>

                <input id="name-mail-user" type="text" placeholder="Enter your name">
                <input type="email" placeholder="Enter your email">

                <a class="EmailContribute"><i class="fas fa-paper-plane"></i></a>
                <textarea name="textemail" id="content-email" cols="80" rows="5"></textarea>

            </div>
            <div class="suggest-content"></div>


        </div>

        <!-- ---------- footer ------------- -->
        <footer class="footer">
            <div class="footer__col">
                <h3>Premiere Pro</h3>
                <p>Tips</p>
                <p>Tricks</p>
                <p>Tutorial</p>
                <p>Author</p>

            </div>
            <div class="footer__col">
                <h3>After Effect</h3>
                <p>Tips</p>
                <p>Tricks</p>
                <p>Tutorial</p>
                <p>Author</p>
            </div>
            <div class="footer__col">
                <h3>Photo Shop</h3>
                <p>Tips</p>
                <p>Tricks</p>
                <p>Tutorial</p>
                <p>Author</p>
            </div>
            <div class="footer__col">
                <h3>Adobe Illutrator</h3>
                <p>Tips</p>
                <p>Tricks</p>
                <p>Tutorial</p>
                <p>Author</p>
            </div>
            <div class="footer__col">
                <h2>About Us</h2>
                <a href="https://www.facebook.com/Pioneer.K.N.69/">Nguyễn Mạnh Hùng</a><br>
                <a href="https://www.facebook.com/dmdhgtvd">Đặng Minh Đức</a><br>
                <a href="https://www.facebook.com/truongmanhquan2803">Trương Mạnh Quân</a><br>
                <a href="https://www.facebook.com/teoem2806">Minh Quang</a>
            </div>
            <div class="for-beautiful">
                <p class="for-fun tag">Term & codition</p>
                <p class="for-fun tag">Privacy Polici</p>
                <p class="for-fun tag">Supplier Code and Conduct</p>
                <p class="for-fun">Maketing for Us</p>
                <p class="copyright">&copy;2020 All right resever</p>
            </div>
        </footer>
    </div>
        
        
        `
    }
}

window.customElements.define('content-page', Content)