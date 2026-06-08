const express = require("express");
const app = express();
// console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use is a globla listner it will listen all the request

// app.use((req , res)=>{
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1>  <ul><li>apple</li><li>Mango</li></ul>";
//     res.send(code);
// });

app.get("/",(req , res )=>{
    res.send("Hello come back home again");
});

app.get("/:username/:id",(req,res)=>{
    let {username , id} = req.params;
    let code = `<h1>welcom here @${username} with id ${id}</h1>`
    res.send(code);
});

// app.get("/apple",(req,res)=>{
//     res.send("Now you are at particular section phones");
// });

// app.get("/help",(req,res)=>{
//     res.send("How can i help you");
// });

// app.use((req,res)=>{
//     res.send("this path doesn't exist");
// });

// app.post("/",(req,res)=>{
//     res.send("you sent a post request");
// });

app.get("/search",(req,res)=>{
    let {q} = (req.query);
     if (!q){
         res.send("nothing searched");
    }
   
    res.send(`<h1>Search Results for Query : ${q}</h1>`);
   
});