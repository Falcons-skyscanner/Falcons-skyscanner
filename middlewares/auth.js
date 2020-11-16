const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')
const User = require('../models/User')
const router = require('../routes/users')

//singnup
router.post('/signup',(req,res)=>{
    try{
        const hashPass =await bcrypt.hash(req.body.password,10)
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPass
        })
        await user.save()
        const token = jwt.sign({id:user._id},'secret')
        res.header('auth',token).status(201).json({
            success:true,
            token
        })

    }catch(err){
        res.status(404).json({
            success:false
        })
    }

})


//login
router.post('/login',(req,res)=>{
    try{
        const user = await user.findOne({email:req.body.email})
        const match = await.bcrypt.compare(req.body.password.password)
        if(match)
        const token = jwt.sign({id:user._id},'secret')
        res.header('auth',token).status(201).json({
            success:true,
            token
        })

    }catch(err){
        res.status(404).json({
            success:false
        })
    }
})

// const auth = async(req, res, next) => {
//     try {
//         const token = req.header('auth-sky')
//         console.log(token)
//         if (token) {
//             const decoded = await jwt.verify(token, 'secret')
//             // console.log(userId)
//             const user = await User.findOne({_id: decoded._id})
//             // console.log(user)
//             req.user = user
//             next()

//         }
//     }catch{
//         res.status(404).json({ success : false })
//     }
    
// }


module.exports = auth