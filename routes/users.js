var express = require('express');
var UserService = require("../services/user_service.js");
var router = express.Router();

// 登录
router.post('/login',UserService.login);

// 注销
router.get('/logout',UserService.logout);


module.exports = router;
