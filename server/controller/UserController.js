const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler');
const User = require('../model/UserSchema')


exports.registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body 
    console.log('I am here');
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all the required fields")
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    //Hash the password
    const  salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create a new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword, 

    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
    

})


exports.loginUser = asyncHandler(async (req, res) => {
    try {
        
        const {email, password} = req.body
        
        //check for email
        const user = await User.findOne({email})
        
        //check for password
        if(user &&  (await bcrypt.compare(password, user.password))){
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }
        else{
            res.status(400)
            throw new Error("Invalid credentials")
        }
    } catch (error) {
        res.send(error)
    }
})


exports.authenticate = asyncHandler(async (req, res) => {
    res.status(200).json({
        isAuthenticated: true,
    })
});

// Private Route
exports.getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})



const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn: '30d',
    })
}