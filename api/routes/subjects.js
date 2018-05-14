const express= require('express');
const router = express.Router();

// const subjectRoutes= require('.api/routes/subjects');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'GET request to /subjects'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'POST request to /subjects'
    });
});
//get requests for ids
router.get('/:subjectId', (req, res, next) => {
    const id = req.params.subjectId;
    if (id < 0 ){
        res.status(200).json({
            message: 'You entered an INVALID ID.',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:subjectId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated subject!'
    });
});

router.delete('/:subjectId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted subject!'
    });
});
module.exports=router;