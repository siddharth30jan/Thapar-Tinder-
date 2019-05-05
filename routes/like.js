const route=require('express').Router()
const Users=require('../db/db').Users
const Sequelize= require('sequelize');
//Endpoints!!


  //Like
  'use strict';
  let my_id=0;
  route.post('/',(req,res)=>{
  
    my_id=req.user.id;

    //Update mine
        Users.findOne({
            where: {
                id: req.user.id
            }
        }).then((user)=>{

            let temp=user.like
          
            temp+=req.body.other+ " "

            user.update({
                like: temp
               }).then((user) => {
                   console.log("Added to liked bucket!")
               })
              })


   //Update others
              Users.findOne({
                where: {
                    id: req.body.other
                }
            }).then((user)=>{
    
                let temp=user.likedBy
              
                temp+=req.user.id+ " "
    
                user.update({
                    likedBy: temp
                   }).then((user) => {
                    console.log("Added to liked bucket of other!")
                   })
                  })
             
        













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









    //Check match
    //console.log("my_id is:"+my_id);
    Users.findOne({
        where: {
            id: req.user.id
        }
    }).then((user)=>{
        let other_id=req.body.other;

        if(user.likedBy==null){
            let p=null
            res.send({p,rid});
        }
        else{
            let temp=user.likedBy.split(" ");
            if(temp.indexOf(other_id.toString())){
                res.send({"text":"You matched",other_id,rid});
            }else{
                let p=null
                res.send({p,rid});
            }
        }
           
        
       
        })
    })


    

    



       




exports=module.exports=route
