const express = require('express');
const route = require('./router/route.js');
const { default : mongoose } = require('mongoose');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://bkrajor:Bk.190196@cluster0.bn0kl.mongodb.net/managementStudent", {useNewUrlParser: true})
.then( () => console.log("MongoDb is connected"))   // it passes the function when the promises gets resolved
.catch ( err => console.log(err) )

app.use("/",route)
app.listen(3000,()=>{
    console.log("app is running on port 3000");
})