const { Blog } = require("../models");

module.exports = {
    findAll: (req, res)=>{
        Blog.find()
        .then((respDB)=> res.status(200).json(respDB))
        .catch((err)=> res.status(400).json(err));
    },
    findOne: (req, res)=>{
        Blog.findById(req.params.id)
        .then((respDB)=> res.status(200).json(respDB))
        .catch((err)=> res.status(400).json(err));
    },
    create: (req, res)=>{
        const { body } = req;
        const newBlog = new Blog(body);
        newBlog.save()
        .then ((respDB) => res.status(201).json(respDB))
        .catch((error) => res.status(400).json(error))         
    },  
    update: (req, res)=>{
        const { body } = req;
        Blog.findByIdAndUpdate(req.params.id, body, {new: true})
            .then((respDB)=> res.status(201).json(respDB))
            .catch((err)=> res.status(400).json(err));
    },
    eliminate: (req, res)=>{
        Blog.findByIdAndDelete(req.params.id,)
            .then((respDB)=> res.status(204).json({'Mensaje' : 'Eliminado!'}))
            .catch((err)=> res.status(400).json(err));
    },
};



