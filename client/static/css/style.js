let nav = document.querySelector(".navBar")
let link = document.querySelectorAll(".link")

nav.onclick = function(event) {
    let ind = +event.target.getAttribute("data-active") 
    for(let i=0; i<link.length; i++) {
        if(i == ind) {
            link[i].classList.add("active")
        } else {
            link[i].classList.remove("active")
        }
    }
   
}