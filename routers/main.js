const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    return res.send("Llegaste a la home desde el mainRoutes!!!")
})
module.exports = router;