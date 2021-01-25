import main from './main.js';

export default class extends main {
    constructor() {
        super()
        this.getTitle("Home")
    }
    async getItems() {
      return `  <div class="page">
                    <h1> Static text </h1>
                    <hr>
                    <p> Some static text </p>
                </div>  `
    }
}