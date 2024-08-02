const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { body, validationResult } = require('express-validator')


// create user

router.post('/createuser',[
    body('email','Enter valid email').isEmail(),
    body('name','Enter a valid name, Name should be more than 1 characters').isLength({min:2}),
    body('password',"Enter a valid password, Password should be more than 5 characters").isLength({min:6})
],async(req,res)=>{
    let success = false;
    const errors = validationResult(req);     // get validation result
    if(!errors.isEmpty()){
        success = false;
        return res.status(400).json({succes,errors:errors.array()});
    }
    try{
        let user = await User.findOne({email:req.body.email});
        success = false;
        if(user){
            return res.status(400).json({success, error: "Sorry a user with this email already exists" })
        }
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        const data = {
            user:{
                id:user.id
            }
        }
        success = true;
        res.json({success})
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})

router.post('/login', [
    body('email', "Enter valid email").isEmail(),
    body('password', "Password cannot be blank").exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Incorrect email or password" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Incorrect email or password" });
        }

        success = true;
        res.json({ success });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;