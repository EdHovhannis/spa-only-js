import main from './main.js';


export default class extends main {
    constructor(param) {
        super(param)
        this.getTitle("Home")
    }
    async dataFrom () { 
        const data = [
        {theme: "Science", status: "Sci", id: "11aahash"},
        {theme: "Interesting facts", status: "Int", id: "22bbhash"},
        {theme: "Global weather", status: "Glo", id: "33cchash"},
        {theme: "Machine learning", status: "Mac", id: "44ddhash"},
    ]
    return data.filter((item)=>{
        return item.id == this.param
    }) 
}
    async getItems() {
        let data = await this.dataFrom()
        switch(data[0].status) {
            case "Sci":
                return `  <div class="page">
                <h1> Theme: ${data[0].theme} </h1>
                    <hr>
                    <p> 
                        Physical sciences and engineering, as well as biological sciences have recently made great strides in their respective fields. More importantly, the cross-fertilization of ideas, paradigms and methodologies have led to the unprecedented technological developments in areas such as information processing, full colour semiconductor displays, compact biosensors and controlled drug discovery to name a few. Top experts in their respective fields have come together to discuss the latest developments and the future of micro-nano electronics. They investigate issues to be faced in ultimate limits such as single electron transitors; zero dimensional systems for unique properties; thresholdless lasers, electronics based on inexpensive and flexible plastic chips; cell manipulation; biosensors; DNA based computers; quantum computing; DNA sequencing chips; micro fluidics; nanomotors based on molecules; molecular electronics and recently emerging wide bandgap semiconductors for emitters, detectors and power amplifiers. 
                    </p>
                    <div class="btn">
                        <button data-back="http://localhost:3030/list" class = "back"> List </button>
                    </div>
                </div>  
            ` 
            case "Int": 
                return `  <div class="page">
                <h1> Theme: ${data[0].theme} </h1>
                    <hr>
                    <ul>
                        <li> North Korea and Cuba are the only places you can't buy Coca-Cola. ...</li>
                        <li> The entire world's population could fit inside Los Angeles. ... ...</li>
                        <li> There are more twins now than ever before. ... ...</li>
                        <li> The hottest chili pepper in the world is so hot it could kill you. ...</li>
                    </ul>
                    <div class="btn">
                         <button data-back="http://localhost:3030/list" class = "back"> List </button>
                    </div>
                </div>  
            ` 
            case "Glo": 
                return `  <div class="page">
                <h1> Theme: ${data[0].theme} </h1>
                    <hr>
                    <ul>
                        <li> <a href="https://www.weather.com">Weather</a></li>
                        <li> <a href="https://www.accuweather.com/">Accuweather</a></li>
                        <li> <a href="https://www.gismeteo.com/">Gismeteo</a></li>
                    </ul>
                    <div class="btn">
                        <button data-back="http://localhost:3030/list" class = "back"> List </button>
                    </div>
                </div>  
            ` 
            case "Mac":
                return `  <div class="page">
                <h1> Theme: ${data[0].theme} </h1>
                    <hr>
                    <p>
                    Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it. Many researchers also think it is the best way to make progress towards human-level AI. In this class, you will learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work for yourself. More importantly, you'll learn about not only the theoretical underpinnings of learning, but also gain the practical know-how needed to quickly and powerfully apply these techniques to new problems. Finally, you'll learn about some of Silicon Valley's best practices in innovation as it pertains to machine learning and AI.
                    </p>
                    <div class="btn">
                        <button data-back="http://localhost:3030/list" class = "back"> List </button>
                    </div>
                </div>  
            ` 
            default:
                return ""
        }
    }
}