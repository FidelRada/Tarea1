const conexion = require("../database/db");

exports.save = (req, res)=>{
    const CI = req.body.CI;
    const nombre = req.body.nombre;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const telefono = req.body.telefono;
    conexion.query('INSERT INTO Users SET ?', {CI:CI, Nombre:nombre, Paterno:paterno, Materno:materno, telefono:telefono}, (error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    });    
};
exports.update = (req, res)=>{
    const CI = req.body.CI;
    const nombre = req.body.nombre;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const telefono = req.body.telefono;
    conexion.query('UPDATE Users SET ? WHERE id = ?', {CI:CI, Nombre:nombre, Paterno:paterno, Materno:materno, telefono:telefono}, (error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    });    
};