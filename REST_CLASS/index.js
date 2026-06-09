const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require('method-override');
 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

let posts = [
    {
        id:uuidv4(),
        username : "nik",
        content: "I Love Coding!" 
    },
    {
        id:uuidv4(),
        username : "adam",
        content: "nik will achieve freedom"
    },
    {
        id:uuidv4(),
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
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4(); 
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{ post });
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newcontent;
    console.log(newcontent);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}  = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(id);
    // console.log(post.id);

    res.render("edit.ejs",{post});
});
app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
    // res.send("Delete Success");
})
