const { Router } = require("express");
const { User } = require("../db")
const { Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const value = await User.findOne({
        username:username,
        password:password
    });
    if(value){
        res.json({
            mssg:"User Exists!!"
        })
    }
    else{
        await User.create({
            username:username,
            password:password
        });
        res.json({
            mssg:"User Created Succesfully!!"   
        })
    }


});

router.get('/courses',async (req, res) => {

    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
    
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try{
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    });
}catch(e){
    console.log(e);
}
    res.json({
        mssg:"Purchase Complete!!"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username
    });
    const course = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses:course
    })
});

module.exports = router