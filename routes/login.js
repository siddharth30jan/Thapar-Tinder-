const route=require('express').Router()
const passport=require('../passport')

route.get('/fail',(req,res)=>{
  res.send('N');
})

route.get('/suc',(req,res)=>{
    res.send('Y');
  })

route.post('/',passport.authenticate('local',{
  failureRedirect: '/login/fail',
  successRedirect: '/login/suc',
}))
module.exports=route