const { Router } = require('express');

const router = Router();
const axios = require('axios');

router.get('/prueba', async(req, res )=>{

    const instance = axios.create({
        baseURL: 'http://localhost:3000/api/pruebas'
    })

    const result = await instance.get();

    const data = JSON.stringify(result.data.msg);

    res.render('../public/index', {
        data
    });
});

module.exports = router;