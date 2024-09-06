const router = require('express').Router() //connectivity

const userModel = require("../apis/user/userModel")

router.post('/user/add', async (req, res)=>{
    let total = await userModel.countDocuments()
    let user = new userModel({
        autoId:total+1,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    user.save()
    .then((result)=>{
        res.send({
            success:true,
            status:200,
            message:"New User Added",
            data:result
        })
    })
    .catch((err)=>{
        res.send({
            success:false,
            status:500,
            message:err.message
        })
    })

})


router.all("**",(req,res)=>{             //wild card(*)
    res.send({
        success:false,
        status:404,
        status:404,
        message:'INVALID ADDRESS'
    })
})             //method
module.exports = router

