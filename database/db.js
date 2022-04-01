const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'CRUD'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: ' + error);
        return
    }
    console.log('¡Conectado a la DB!')
});

module.exports = conexion;