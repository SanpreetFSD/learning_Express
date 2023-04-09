const express = require("express");

const app = express()

app.use(express.json());

const products = require('./product');

app.get("/product", (req, res)=>{
    res.send(products)
})

// app.get('/product/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const product = products.find(p => p.id === id);
//     // res.send(product);
//   });


  app.post("/product", function (req, res){
    const course={};
    course.id=req.body.id;
    course.name=req.body.name;
    course.category=req.body.category;
    course.price=req.body.price;
    courses.push(course);
    res.send(product);

})

app.listen(3000,()=>{
    console.log("we are using port 3500")
})