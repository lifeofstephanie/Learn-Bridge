const {Module} = require('../models/module');

exports.getModuleByCourse = async(req, res)=>{
    try{
        const modules = await Module.findAll({where:{courseId:req.params.courseId}})
        res.json(modules)
    }catch(error){
        res.status(500).json('Failed to fetch Modules')
    }
}


exports.createModule = async(req, res)=>{
    try{
        const module = await Module.create({
            title:req.body.title,
            courseId: req.body.courseId
        })
        res.status(201).json(module)
    }catch(error){
        res.status(400).json({error:'Failed to create module'})
    }
}