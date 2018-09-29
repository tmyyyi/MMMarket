// 用户DAO数据访问
const {User} = require("./model.js");

const UserDao = {
	find(condition){
		//查找用户信息
		return User.find(condition);
	}
};


module.exports = UserDao;