const fs=require('fs');

function logDBMiddleware(req,res,next){
    fs.appendFileSync('logDB.txt','Se creó un registro al ingresar en: '+req.url);
    next();

}

module.exports=logDBMiddleware