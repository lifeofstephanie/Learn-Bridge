const {Course} = require('../models/course')

exports.getAllCourses = async (req, res)=>{
    try{
        const courses = await Course.findAll()
        res.json(courses)
    } catch(error){
        res.status(500).json({error:'Failed to fetch courses'})
    }
}

exports.createCourse = async(req, res)=>{
    try{
       const course = await Course.create({title:req.body.title})
       res.status(201).json(course)
    }catch(error){
        res.status(400).json({error:'Failed to create course'})
    }
}