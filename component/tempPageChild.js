class TempPageChild extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        
    <div class="component-child" id = "">
        <a>
            <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="Ảnh bài viết" >
            <p>Khóc 1 dòng sông</p>
        </a>
    
    
    </div>
        
        
        `;
    }
}

window.customElements.define('temp-child', TempPageChild);
