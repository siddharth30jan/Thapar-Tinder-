const route=require('express').Router()
const Users=require('../db/db').Users
const Sequelize= require('sequelize');
//Endpoints!!

route.get('/',(req,res)=>{

function randid(max) {
return Math.floor(Math.random() * Math.floor(max));
}

//next photo
"use strict"
var rid = 0;
Users.findOne({
    where: {
        id: req.user.id
    }
}).then((usrme)=>{
    console.log("usrme.like"+usrme.like);
    rid += randid(4)+1;


    while( rid.toString()==req.user.id || usrme.like.split(" ").indexOf(rid.toString())>=0){
        rid = randid(4)+1;
        
        console.log("trying "+rid);
    }
}).catch((err)=>{
    console.log(err);
});

console.log("my rid: "+rid);









    
    })


    

    



       




exports=module.exports=route
