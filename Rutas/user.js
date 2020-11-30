const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');


//REGISTRO
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

//BORRAR USUARIO
user.delete("/userDelete",async(req,res,next) =>{
    const {userEmail} = req.body;
        let query ="DELETE FROM users";
        query += ` WHERE userEmail = '${userEmail}' `;

        const rows = await db.query(query);

        if(rows.affectedRows==1){
            return res.status(201).json({code:201,message:"Usuario Borrado correctamente"});

        }
        return res.status(500).json({code: 500, message:"Ocurrio un error al borrar"});
  
  
});
//CAMBIOS USUARIOS
user.put("/userUpdate", async(req,res,next)=>{
    const{userName,userLastName,userPhone,userEmail,userAddress} = req.body;
    if(userName && userLastName && userPhone && userEmail && userAddress){
        let query=`UPDATE users SET userName='${userName}', userLastName='${userLastName}', userPhone='${userPhone}'`;
        query += `, userEmail = '${userEmail}', userAddress='${userAddress}' WHERE userName='${userName}';`;
        const rows = await db.query(query);
        if(rows.affectedRows==1){
            return res.status(201).json({code:201,message:"Usuario Actualizado correctamente"});

        }
        return res.status(500).json({code: 500, message:"Ocurrio un error"});
    }
    return res.status(500).json({code:500, message:"Campos incompletos"});
    
});


//ADMINISTRADOR LOGIN
user.post("/login",async(req,res,next)=>{
    const {adminEmail,adminPassword}=req.body;
    const query=`SELECT * FROM administradores WHERE adminEmail='${adminEmail}' AND adminPassword = '${adminPassword}'`;
    const rows= await db.query(query);
    if(adminEmail && adminPassword){
        if(rows.length == 1){
            const token = jwt.sign({
                adminEmail: rows[0].adminEmail,
                adminPassword: rows[0].adminPassword
            }, "debugkey");
            console.log(token)
            return res.status(200).json({code: 200, message: token});
        }
        else{
            return res.status(200).json({code: 401,message:"usuario y/o contraseña incorrectos"});

        }
    }
    return res.status(500).json({code: 500,message:"Campos incompletos"});

});

//TODOS LOS USUARIOS
user.get("/",async(req,res,next)=>{
    const query="SELECT * FROM users";
    const rows = await db.query(query);

    return res.status(200).json({code:200, message: rows});
});

module.exports = user;