const express = require("express");
let app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log("i am listening");
});

app.get("/register",(req,res)=>{
    let {user,pass} = req.query;
    res.send(`ye hai aam jindgi ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,pass} = req.body;
    res.send(`ye hai mentos jindgi ${user} `);
});