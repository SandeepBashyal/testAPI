const express = require("express");
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Api is running")
});

app.get('/test',(req,res)=>{
    res.send("test is running")
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server running on port");
})