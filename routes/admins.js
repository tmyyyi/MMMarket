var express = require('express');
var AdminService = require('../services/admin_service.js');
var path = require('path');
var router = express.Router();

//发布
router.post("/publish",AdminService.publish);

//查找
router.get("/find",AdminService.find);

//删除
router.post("/delete",AdminService.delete);

//修改
router.post("/update",AdminService.update);


module.exports = router;