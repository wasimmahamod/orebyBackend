const Category = require('../../model/categoryModel');
let SubCategory = require('../../model/subCategoryModel')
async function createSubCategoryControllers(req,res){
    let{name,description,category}=req.body;

    let exsitingName= await SubCategory.find({name})

    if(!name){
        return res.json({error:"name is required "})
    }else if(exsitingName.length>0){
        return res.json({error:"this subcategory is already use  "})
    }
    else{
        let subcategory= new SubCategory({
            name,
            description,
            category

        })
        subcategory.save()
        await Category.findOneAndUpdate({_id:subcategory.category},{$push:{subCategory:subcategory._id}},{new:true})
        res.send(subcategory)
    }
}

module.exports=createSubCategoryControllers