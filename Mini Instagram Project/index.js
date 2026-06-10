const { urlencoded } = require("body-parser");
let express = require("express");
let app = express();
let port = 8080;
let path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

let posts = [
    {
        id: uuidv4(),
        username: "nikhil",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
        caption: "Dream big. Work silently."
    },

    {
        id: uuidv4(),
        username: "adam",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
        caption: "Building my future one line of code at a time."
    },

    {
        id: uuidv4(),
        username: "eve",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        caption: "Consistency beats motivation."
    },

    {
        id: uuidv4(),
        username: "luffy",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
        caption: "Never stop chasing freedom."
    },

    {
        id: uuidv4(),
        username: "zoro",
        imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
        caption: "Lost again, but still moving forward."
    }


];

app.listen(port,()=>{
console.log(`listening on ${port} `);
});

app.get("/",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/newpost",(req,res)=>{
    res.render("new.ejs");
});

app.post("/newpost",(req,res)=>{
    let info = req.body;
    let id = uuidv4();
    info.id = id;
    posts.push(info);
    res.redirect("http://localhost:8080/");
});

app.get("/detailedpost/:id",(req,res)=>{
    let id = req.params.id;
    let post = posts.find((p)=> id === p.id);
    res.render("detailpost.ejs",{post});
});

app.get("/editpost/:id",(req,res)=>{
    let id = req.params.id;
    let post = posts.find((p)=> id === p.id);
    res.render("editpost.ejs",{post});
});

app.patch("/editpost/:id",(req,res)=>{
    let info = req.body.caption;
    let id = req.params.id;
    let post = posts.find((p)=> id === p.id);
    post.caption = info;
    res.redirect("http://localhost:8080/");
});

app.delete("/deletepost/:id",(req,res)=>{
    let id = req.params.id;
     posts = posts.filter((p) => id !== p.id);
     res.redirect("http://localhost:8080/");
});
