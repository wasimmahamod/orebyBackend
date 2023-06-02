const express =require('express');
const createCategoryControllers = require('../../controllers/categoryControllers/createCategory');
const categoryStatusController = require('../../controllers/categoryControllers/categoryStatus');
const router =express.Router();

router.post('/createCategory',createCategoryControllers)
router.post('/categoryStatus',categoryStatusController)

module.exports=router;