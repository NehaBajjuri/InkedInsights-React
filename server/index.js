const express = require('express')

const app = express()
console.log("Hello");
app.listen(5000, ()=>{
    console.log("app is running");
})