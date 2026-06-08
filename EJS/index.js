const Express = require("express");
const app = Express();
const path = require("path");
const port = 3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs",{num : diceValue});
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    
    const data = instaData[username];
    if(data){
        res.render("ig.ejs",{data});
    } else{
        res.render("error.ejs");
    }
    
    
})

app.listen(port,()=>{
    console.log(`Started listening on ${port}`);
})
