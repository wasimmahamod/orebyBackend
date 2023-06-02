const SubCategory = require("../../model/subCategoryModel")

async function subCategoryStatus(req,res){
    let {name,status}=req.body

    if(status=='rejected'||status=='waiting'){
        let updatecategory= await SubCategory.findOneAndUpdate({name},{$set:{isActive:false,status:status}},{new:true})

        return res.json({success:"Status updated "})
    }else if(status=='approved'){
        let updatecategory= await SubCategory.findOneAndUpdate({name},{$set:{isActive:true,status:status}},{new:true})
        return res.json({success:"Status updated "})
    }else{
        return res.json({error:"Invalid Status "})
    }
}

module.exports=subCategoryStatus;