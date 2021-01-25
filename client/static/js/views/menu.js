import main from './main.js';
const data = [
    {name: "Pizza", price: "200", kkal: "220"},
    {name: "Burger", price: "350", kkal: "260"},
    {name: "Roll", price: "180", kkal: "160"},
    {name: "Sushi", price: "230", kkal: "190"},
    {name: "Cake", price: "300", kkal: "230"}
]
export default class extends main {
    constructor() {
        super()
        this.getTitle("Menu")
    }
    async getItems() {
        let html = "" 
        for(let key in data) {
             html +=     `<tr>
                          <td> ${data[key].name} </td>
                          <td> ${data[key].price} </td>
                          <td> ${data[key].kkal} </td>
                          </tr>
                          `
        }
  
  
        return  ` <table class="tableList">
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Calories</th>
        </tr>
          ${html} 
         </table>
         <h2 class="amount">All dishes: ${data.length} varieties </h2>
         <div class="btn">
           <button data-back="http://localhost:3030/" class = "back"> Home </button>
         </div>
         
         `
    }
}