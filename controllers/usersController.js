const path = require('path');

const usersController = {
    index: (req , res)=> {
        return res.sendFile(path.resolve(__dirname , '../views/users.html'))},
    create: (req , res)=> {
        return res.send("Crear un usuario desde controlador")
    },
    register:(req, res)=>{
        return res.send("Formulario de registro")
    },
    delete:(req, res)=>{},
    update: (req, res)=>{},
    detail:(req , res)=> {
        if (req.params.idUser == undefined){
            return res.send("Detalle del usuario sin parametro")
        } else{
            return res.send("Detalle del usuario " + req.params.idUser)
        }
    },
    login: (req, res)=>{}

}

module.exports = usersController;
