const express= require('express');
const {router} = require("express/lib/application");
const app = new express();
//app.use(router);
//app.use( router);
app.use("api/v1", router);

//undefined routes

//app.use('*', (req,res)=>{
//    res.status(404).json({status:"fail",data:"not found"})
//})


module.exports=app