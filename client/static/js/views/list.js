import main from './main.js';

export default class extends main {
    constructor() {
        super()
        this.getTitle("list")
       
    }
    async getItems(path) {

        return ` 
            <div class="page">
                <h1> List of Some Posts </h1>
                <h1> </h1>
                <hr />
                    <ul class = "list"> 
                        <li>
                            <a href="${path + "/11aahash"}" data-active="111"> Scientists' list. </a>
                        </li> 
                        <li>
                            <a href="${path + "/22bbhash"}" data-active="222"> Some interesting facts about our team. </a>
                        </li> 
                        <li>
                            <a href="${path + "/33cchash"}" data-active="333"> The impact of Global warming. </a>
                        </li> 
                        <li>
                            <a href="${path + "/44ddhash"}" data-active="444"> Machine learning </a>
                        </li> 
                    </ul>
                <div class="btn">
                    <button data-back="http://localhost:3030/" class = "back"> Home </button>
                </div>
            </div> 
        `
    }
}