const express =require('express');
const createSubCategoryControllers = require('../../controllers/subCategoryControllers/createSubCategoryControllers');
const subCategoryStatus = require('../../controllers/subCategoryControllers/subCategoryStatus');
const router =express.Router();

router.post('/createSubCategory',createSubCategoryControllers)
router.post('/subCategoryStatus',subCategoryStatus)

module.exports=router;