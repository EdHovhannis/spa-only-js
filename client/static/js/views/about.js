import main from './main.js';

export default class extends main {
    constructor() {
        super()
        this.getTitle("About")
    }
    async getItems() {
        return ` <div class="page">
                    <h1>About us</h1>
                    <hr />
                    <p> Some text for about page </p>
                    <button data-back="http://localhost:3030/" class="back"> Home </button>
                </div>  `
    }
}