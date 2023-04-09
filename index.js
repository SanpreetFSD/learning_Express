const express = require("express");

const app = express();
// get method
// get method passes the info using url;
// let port = 3000;

app.get("/test", (req, res) => {
    res.send("Get method working and also my server")
})






app.listen(5000,()=>{
    // console.log(`my server is running at ${port}`)
    console.log("my server is running")
})