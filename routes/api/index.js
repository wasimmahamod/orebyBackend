const express =require('express');
const router =express.Router();

const authontication = require('./auth.js')
const category = require('./category.js')
const subcategory = require('./subCategory.js')

router.use('/auth',authontication)
router.use('/category',category)
router.use('/subcategory',subcategory)

module.exports=router;