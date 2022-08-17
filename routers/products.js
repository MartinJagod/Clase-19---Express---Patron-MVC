const express = require('express');
const router = express.Router();

router.get('/', (req , res)=> {
    return res.send("Listado de productos")
})
router.get('/detail', (req , res)=> {
    return res.send("Detalle de producto")
})

module.exports = router;
