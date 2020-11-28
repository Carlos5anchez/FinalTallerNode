const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');

user.post("/signin",async(req,res,next) =>{
    const {userName, userLastName, userPhone,userEmail,userAddress} = req.body;
    
    if(userName && userLastName &&  userPhone && userEmail && userAddress){
        let query ="INSERT INTO users(userName, userLastName, userPhone,userEmail, userAddress)";
        query += `VALUES ('${userName}','${userLastName}','${userPhone}','${userEmail}','${userAddress}')`;

        const rows = await db.query(query);

        if(rows.affectedRows==1){
            return res.status(201).json({code:201,message:"usuario registrado correctamente"});

        }
        return res.status(500).json({code: 500, message:"Ocurrio un error"});
    }
    return res.status(500).json({code:500, message:"Campos incompletos"});
});

user.post("/login",async(req,res,next)=>{
    const {adminEmail,adminPassword}=req.body;
    const query=`SELECT * FROM administradores WHERE adminEmail='${adminEmail}' AND adminPassword = '${adminPassword}'`;
    const rows= await db.query(query);
    if(adminEmail && adminPassword){
        if(rows.length == 1){
            const token = jwt.sign({
                idAdmin: rows[0].idAdmin,
                adminEmail: rows[0].adminEmail
            }, "debugkey");
            return res.status(200).json({code: 200, message: token});
        }
        else{
            return res.status(200).json({code: 401,message:"usuario y/o contraseña incorrectos"});

        }
    }
    return res.status(500).json({code: 500,message:"Campos incompletos"});

});
user.get("/",async(req,res,next)=>{
    const query="SELECT * FROM users";
    const rows = await db.query(query);

    return res.status(200).json({code:200, message: rows});
});

module.exports = user;