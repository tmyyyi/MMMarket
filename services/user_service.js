const UserDao = require("../dao/user_dao.js");

const UserService = {
	// 登录
	login(req, res, next) {
		// 获取post请求中传递的登录用户名与密码
		const {username, password} = req.body;
		// 从数据库中查询出用户名对应的用户信息
		UserDao.find({username})
		  .then((data)=>{
		  	// data 是一个数组，存放了所在查找到的满足条件的数据
		  	if (data.length === 1) {
		  		// 用户信息
		  		const user = data[0];
		  		// 比较从请求中获取到用户的密码与实际保存的密码是否匹配
		  		const b = password == user.password?1:0;
		  		if (b) { // 登录成功
		  			// 将用户信息保存到 session 中
		  			req.session.loginUser = user;
		  			res.json({res_code:1, res_error:"", res_body:{data:{username: user.username}}});
		  		} else {
		  			res.json({res_code:0, res_error:"", res_body:{}});
		  		}
		  	} else {					  		
		  		res.json({res_code:0, res_error:"", res_body:{}});
		  	}
		  })
		  .catch((err)=>{
		  	res.json({res_code:-1, res_error:err, res_body:{}});
		  });
	},
	// 注销
	logout(req, res, next) {

	}
}

module.exports = UserService;