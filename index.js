require('dotenv').config();
console.log(process.env.PORT);
const express=require('express');
const app=express();
const port=process.env.PORT||4000;
app.get('/',(req,res)=>{
 //res.write("hghggdf");
 //res.write("hii puja");
 //res.end();
})
app.get('/target',(req,res)=>{
    res.json([{
        id:1,
        name:"priya"
    },{
        id:2,
        name:"pooja"
    }])
})
app.listen(port,()=>{
 console.log(`listen port no `);
})
