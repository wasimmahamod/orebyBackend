const Category = require("../../model/categoryModel");

async function categoryStatusController(req,res){
    let {name,status}=req.body

    if(status=='rejected'||status=='waiting'){
        let updatecategory= await Category.findOneAndUpdate({name},{$set:{isActive:false,status:status}},{new:true})

        return res.json({success:"Status updated "})
    }else if(status=='approved'){
        let updatecategory= await Category.findOneAndUpdate({name},{$set:{isActive:true,status:status}},{new:true})
        return res.json({success:"Status updated "})
    }else{
        return res.json({error:"Invalid Status "})
    }
}

module.exports=categoryStatusController;