const Category = require("../../model/categoryModel");

async function createCategoryControllers(req,res){
    let{name,description}=req.body;

    let exsitingName= await Category.find({name})

    if(!name){
        return res.json({error:"name is required "})
    }else if(exsitingName.length>0){
        return res.json({error:"this category is already use  "})
    }
    else{
        let category= new Category({
            name,
            description,

        })
        category.save()
        res.send(category)
    }
    
}

module.exports=createCategoryControllers;