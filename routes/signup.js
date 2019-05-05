const route=require('express').Router()
const Users=require('../db/db').Users
var CryptoJS = require("crypto-js");
let otp=[];

route.get('/',(req,res)=>{
    res.render('signup')
})

route.post('/',(req,res)=>{
    console.log((Math.floor(Math.random()*90000)+10000).toString())
    Users.create({
        id: (Math.floor(Math.random()*90000)+10000).toString(),
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        bio: req.body.bio,
        gender: req.body.gender
    }).then((createdUser)=>{
       res.send("added")
    }).catch((err)=>{
        console.log("Error"+err);
        res.send("same email")
    })    
})
   
module.exports=route