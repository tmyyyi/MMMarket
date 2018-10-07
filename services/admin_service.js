const AdminDao = require("../dao/admin_dao.js");

const AdminService = {
	//发布职位信息
	publish(req,res,next){
		//获取请求中传递的职位信息
		const{usercode, username, usersex, birth, tel, usertype} = req.body;
		//保存到数据库中
		AdminDao.save({usercode, username, usersex, birth, tel, usertype})
							.then((data)=>{
								res.json({res_code:1,res_error:"",res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code: 0,res_error: err,res_body: {}});
							});
	},
	//查询职位信息
	find(req,res,next){
		//获取查询的页码
		const {page} = req.query;
		//查询
		AdminDao.findByPage(page)
							.then((data)=>{
								res.json({res_code: 1,res_error: "", res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0,res_error: err,res_body:{}});
							});

	},
	//删除职位
	delete(req,res,next){
		//获取删除的数据
		const {removeId} = req.body;
		//删除
		AdminDao.removeAdm(removeId)
							.then((data)=>{
								res.json({res_code: 1,res_error: "",res_body: {data}});
							})
							.catch((err)=>{
								res.json({res_code: 0,res_error: err,res_body: {}});
							})
	},
	//更新管理员信息
	update(req,res,next){
		//获取条件
		const {_id,usercode,username,usersex,birth,tel,usertype} = req.body;
		//更新
		AdminDao.updateAdm({_id,usercode,username,usersex,birth,tel,usertype})
								.then((data)=>{
									res.json({res_code: 1,res_error: "",res_body: {data}});
								})
								.catch((err)=>{
									res.json({res_code: 0,res_error: err,res_body: {}});
								})
	}
}

module.exports = AdminService;