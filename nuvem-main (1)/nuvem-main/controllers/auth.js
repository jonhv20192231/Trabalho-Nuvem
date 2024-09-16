// auth.js
const { json } = require("express");
const jwt = require("jsonwebtoken");

const verifyLogin = (req,res,next)=>{
    const header = req.header('authorization-token');
    if(!header){
        return res.status(403).json({msg:"Logue para acessar"})
    }
    next()
}
const verifyToken = (req,res,next)=>{
    const header = req.header('authorization-token');

    try {
        const tokenVerified = jwt.verify(header,process.env.SECRET)
        req.user = tokenVerified
        next();
    } catch (error) {
        res.status(401).json({error:error.message});
    }
}

const verifyADMIN = (req,res,next)=>{
    const headerEmail = req.header("headerEmail");
    const emailAdmin = "isaque@admin.com";
    if(!headerEmail){
        return res.status(401).json({msg:"Email é necessário"});

    }
    if(headerEmail !== emailAdmin){
        return res.status(401).json({msg:"Acesso negado,Somente Admins!!!"})
    }
    next()
}

module.exports = { verifyLogin,verifyToken,verifyADMIN };
