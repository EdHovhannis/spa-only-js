const express = require("express")
const path = require("path")
const app = express()

app.use("/static", express.static(path.join(__dirname, "client", "static")))

app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "index.html"))
})

const PORT = process.env.PORT || 3030
app.listen(PORT, ()=> {
    console.log(`Server on PORT: ${PORT}`);
})
