const {Admin} = require("./model.js");

const AdminDao = {
	//保存管理用户的信息
	save(adminInfo){
		return  Admin(adminInfo).save();
	},
	//加载显示
	findByPage(page) {
		const pageSize = 6;//每页显示记录数
		return Admin.find().limit(pageSize).skip((page - 1) * pageSize);
	},
	//删除数据
	removeAdm(removeId){
		return Admin.deleteOne(removeId);
	},
	updateAdm(condition){
		return Admin.findByIdAndUpdate({_id:condition._id},condition);
	}
}


module.exports = AdminDao;