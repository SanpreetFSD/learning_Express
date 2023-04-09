const express = require("express");

const app = express();

app.use(express.json);

const courses = [

    {
         "course" :  "nodejs",
        "name" : "sanpreet"
    }
    ,
    {
         "course" : "express",
         "name" : "Sanjoy"
    
    }
    ,
    {
         "course" : "Ui/ux",
         "name" : "Anuj"
    
    }
    ]
// get method
// get method passes the info using url;
// let port = 3000;

app.get("/test", (req, res) => {
    res.send("Get method working and also my server")
})

// get, post, put /// path

app.get("/courses", function (req, res){
    res.send(courses);
});

app.get("/courses/:name", function (req, res){
    // res.send(req.params.name);
    res.send(courses[0]);

    //sending the single course data in response    
});

// create a post request to adding a new course

app.post("/courses", function (req, res){
    const course={};
    course.name=req.body.name;
    course.author=req.body.author;
    courses.push(course);

})






app.listen(5000,()=>{
    // console.log(`my server is running at ${port}`)
    console.log("my server is running")
})

//ecommerce application has products
//product.js: Will hold the array for all the products
//import that array in index js
//id, name, category, price 
//Getallproducts, getproductbyid, getproductbyname,addanewproduct