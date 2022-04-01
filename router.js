const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM Users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
});

router.get('/create', (req, res)=>{
    res.render('create')
})

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id
    conexion.query('SELECT * FROM Users WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save)

module.exports = router;