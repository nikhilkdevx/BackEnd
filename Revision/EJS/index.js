const { name } = require("ejs");
let express = require("express");
let app = express();
let port = 3000;

app.set("view engine","ejs");

app.listen(port,()=>{
});

app.get("/",(req,res)=>{
    res.send("<h1>Hey ! there you are at home </h>");
});

app.get("/students",(req,res)=>{
    const students = [{Name : "Nik", Marks : 55,city : "Delhi"},{Name : "sam", Marks : 65,city : "Mumbai"},{Name : "Eliza", Marks : 75,city : "jaipur"},{Name : "Ram", Marks : 85,city : "Nagpur"},{Name : "laksh", Marks : 100,city : "patna"}];
    res.render("students.ejs",{students});
    
});

app.get("/about",(req,res)=>{
    const Title = "About Student Portal "
    res.render("about",{Title});
    
});
