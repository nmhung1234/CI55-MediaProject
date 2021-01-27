class home extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        <p>aawwwa ${currentUser.name}</p>
        `
    }
}
window.customElements.define('home-screen', home)