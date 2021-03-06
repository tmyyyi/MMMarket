//引入 mongoose
const mongoose = require("mongoose");

//连接 mongodb 数据库
mongoose.connect('mongodb://localhost/MineMineMarket');

//创建用户Schema、用户管理Schema、账单Schema、供应商Schema
const userSchema = new mongoose.Schema({
	username: String,
	password: String
});
const adminSchema = new mongoose.Schema({
	usercode: Number,
	username: String,
	usersex: String,
	birth: Date,
	tel: Number,
	usertype: String
});

//根据用户Schema创建用户模型
const User = mongoose.model("user",userSchema);
//根据管理用户Schema创建用户模型
const Admin = mongoose.model("admin", adminSchema);

module.exports = {User,Admin};