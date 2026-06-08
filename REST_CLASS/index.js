const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

let posts = [
    {
        username : "nik",
        content: "I Love Coding!" 
    },
    {
        username : "adam",
        content: "nik will achieve freedom"
    },
    {
        username : "eve",
        content: "nik you wil remeber this late night girnding"
    }
];

app.listen(port,()=>{
    console.log(`listening to the port ${port}` );
});

app.get("/",(req,res)=>{
    res.send("you are at home page");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts} );
});

app.get("/posts/new",(req,res)=>{
    res.render("new");
})

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
})