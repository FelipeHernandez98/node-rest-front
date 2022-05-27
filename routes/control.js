const { Router } = require('express');
const router = Router();
const axios = require('axios');
const req = require('express/lib/request');
const async = require('hbs/lib/async');


router.get('/consultarCantidades', (req, res) => {
    res.render('consultarCantidades');
})

router.post('/consultarCantidades', async (req, res) => {

    const { grupo } = req.body;

    const instance = axios.create({
        baseURL: `http://localhost:4000/prod/productos/${grupo}`
    })

    const result = await instance.get();

    const data = JSON.stringify(result.data.cont);

    res.render('../views/consultarCantidades', {
        data
    });
});

router.get('/registrarProducto', async(req, res) => {

    const instance = axios.create({
        baseURL: `http://localhost:4000/prod/productos`
    })

    const result = await instance.get();

    const productos = JSON.stringify(result.data.productos);

    console.log(productos)

    res.render('registrarProducto', [productos]);

})



module.exports = router;