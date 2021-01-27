const style = `
<style>
input {
    padding: 20px;
    width: 200px;
    text-align: center;
    background: none;
    color: black;
    font-size: 16px;
    margin: 5px;
    border-radius: 24px;
    border: 2px solid #2ecc71;
    transition: 0.25s;
    outline: none;
}

input:focus {
    width: 300px;
    border: 2px solid #3498db;
}

</style>
`
class input extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._type = this.getAttribute('type');
        this._placeholder = this.getAttribute('placeholder');
        this._shadowDOM.innerHTML = `
        ${style}
        <div>
            <input type="${this._type}" placeholder="${this._placeholder}">
            <p class="error" style="color: red;"></p>
        </div>
    `
    }
    get value() {
        return this._shadowDOM.querySelector('input').value;
    }
    set value(value) {
        return this._shadowDOM.querySelector('input').value = value;
    }

    static get observedAttributes() {
        return ['err']
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if(name == 'err'){
            this._shadowDOM.querySelector('.error').innerText = newValue;
        }
    }

}
window.customElements.define('input-wrap',input)