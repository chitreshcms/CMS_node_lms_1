const express= require('express');
const router = express.Router();

// const courseRoutes= require('.api/routes/courses');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'GET request to /courses'
    });
});
router.post('/',(req,res,next)=>{
    const course ={
        CourseName:req.body.CourseName,
        CourseId:req.body.CourseId
        //other attributes of course
    };
    res.status(201).json({
        message:'POST request to /courses',
        createdCourse:course
    });
});
 
router.get('/:courseId', (req, res, next) => {
  
        res.status(200).json({
            message: 'Course Details',
            CourseId:req.params.CourseId
        });
});

router.patch('/:courseId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated course!'
    });
});

router.delete('/:courseId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted course!',
        CourseId:req.params.CourseId
    });
});
module.exports=router;