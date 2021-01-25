import home from './views/home.js'
import about from './views/about.js'
import menu from './views/menu.js'
import list from './views/list.js'
import listDetail from './views/listDetail.js'

const locationDir = (pth) => {
    history.pushState("", {}, pth)
    Router()
}

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") +"$");

const getParams = param => {
    const value = param.result.slice(1)
    return value[0]
}

const Router = async () => {
    let Routes = [
        {path: "/", view: home},
        {path: "/about", view: about},
        {path: "/menu", view: menu},
        {path: "/list", view: list},
        {path: "/list/:id", view: listDetail}
    ]
    let AllRoutes = Routes.map((Route)=>{
        return {
            Route,
            result: location.pathname.match(pathToRegex(Route.path))
        }
    })
    let ActiveRoute = AllRoutes.find(ActiveRoute=>ActiveRoute.result!==null)

    if (!ActiveRoute) {
        ActiveRoute = {
            Route: Routes[0],
            result: [location.pathname]
        }
    }
  getParams(ActiveRoute)
  
    if(location.pathname=="/list") {
        const html = new ActiveRoute.Route.view()
        document.querySelector(".out").innerHTML = await html.getItems("/list")
        // console.log(location.pathname); 
    } else if (location.pathname.lastIndexOf("/")>0) {
        const html = new ActiveRoute.Route.view(getParams(ActiveRoute))
        document.querySelector(".out").innerHTML = await html.getItems()
    } else {
        const html = new ActiveRoute.Route.view()
        document.querySelector(".out").innerHTML = await html.getItems()
    }
     
}


window.addEventListener("popstate", Router)


document.body.onclick = (event) => {
    if (!!event.target.getAttribute("data-active")) {
        event.preventDefault()
        locationDir(event.target.href)
    }
    if (event.target.className == "back") {
        locationDir(event.target.getAttribute("data-back"))
    }
}
Router()