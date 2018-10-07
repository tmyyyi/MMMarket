function Admin(){
	this.init();
	this.addListener();
}

$.extend(Admin.prototype,{
	//初始化
	init(){
		//加载时，"用户管理"导航激活
		$(".usermanage").addClass("active").siblings().removeClass("active");
		//加载第一页数据
		this.loadByPage(1);
	},
	//按页加载职位信息
	loadByPage(page){
		//page是待加载的页面，默认加载第1页
		page = page || 1;
		//ajax 访问查询接口
		$.get("/api/admin/find",{page},(data)=>{
			let html = "";
			data.res_body.data.forEach((curr,index)=>{
				html +=`<tr>
							<td>${curr.usercode}<span class="hidden">${curr._id}</span></td>
							<td>${curr.username}</td>
							<td>${curr.usersex}</td>
							<td>${curr.birth}</td>
							<td>${curr.tel}</td>
							<td>${curr.usertype}</td>
							<td><a href="javascript:void(0);"><img src="/img/read.png"></a> 
								<a href="" data-toggle="modal" data-target="#updateUserModal"><img src="/img/updata.png"></a>
								<a href="javascript:void(0);"><img src="/img/delete.png"></a>
							</td>
						</tr>`;
			});
			$(".usermanage-table tbody").html(html);	
		});

	},
	//注册事件监听
	addListener(){
		//点击翻页
		$(".pagination").on("click","a",$.proxy(this.loadByPageHandler,this));
		//添加管理员
		$(".btn-add-admin").on("click",this.addUserHandler);
		//删除管理员
		$(".usermanage-table tbody").on("click","a:nth-child(3)",this.delUserHandler);
		//修改管理员
		$(".usermanage-table tbody").on("click","a:nth-child(2)",this.updateUserHandler);

	},
	//点击翻页处理
	loadByPageHandler(event){
		const src = event.target;
		const page = Number($(src).text()) || 1;
		this.loadByPage(page);
		$(src).parent().addClass("active").siblings().removeClass("active");
		return false;
	},
	//添加管理员处理
	addUserHandler(){
		// console.log(234);
		// let formDate = new FormDate($(".add-user-form")[0]);
		formDate = $(".add-user-form").serialize();
		let url = "/api/admin/publish";
		$.post(url,formDate,(data)=>{
			//将成功后的数据追加到页面表格最后
			const curr = data.res_body.data;
			const html = `<tr>
							<td>${curr.usercode}</td>
							<td>${curr.username}</td>
							<td>${curr.usersex}</td>
							<td>${curr.birth}</td>
							<td>${curr.tel}</td>
							<td>${curr.usertype}</td>
							<td><a href="javascript:void(0);"><img src="/img/read.png"></a> 
								<a data-toggle="modal" data-target="#updateUserModal"><img src="/img/updata.png"></a>
								<a href="javascript:void(0);"><img src="/img/delete.png"></a>
							</td>
							<span class= "hidden">${curr._id}</span>
						</tr>`;
			$(".usermanage-table tbody").append(html);
			//关闭模态框
			$("#addUserModal").modal("hide");
		})
	},
	//删除管理员处理
	delUserHandler(){
		const id = $(this).parent().parent().find("span").text();
		// console.log(id);
		let url = "/api/admin/delete";
		$.post(url,id,(data)=>{
			$(this).parent().parent().remove();
		})

	},
	//更新管理员信息
	updateUserHandler(){
		const id = $(this).parent().parent().find("span").text();
		
		const usercode =  $(this).parent().parent().find("td:first").html();
		const username =  $(this).parent().parent().find("td:nth-child(2)").text();
		const usersex =  $(this).parent().parent().find("td:nth-child(3)").text();
		const birth =  $(this).parent().parent().find("td:nth-child(4)").text();
		const tel =  $(this).parent().parent().find("td:nth-child(5)").text();
		const usertype =  $(this).parent().parent().find("td:nth-child(6)").text();
	 

		$("#updateUserCode").val(usercode.split("<")[0]);
		$("#updateUsername").val(username);
		$("#updateUsersex").val(usersex);
		$("#updateUserbirth").val(birth);
		$("#updateUsertel").val(tel);

		$(".btn-update-admin").on("click",()=>{
			const url = "/api/admin/update";
			const id=$(this).parent().parent().find("span").text();
			// const formData = new FormData($(".update-user-form")[0]);	
			let formDate = $(".update-user-form").serialize();
			formDate+="&_id="+id;
			$.post(url,formDate,(data)=>{
				console.log(data);
				window.location.reload();
			});
			$("#updateUserModal").modal("hide");
		})
		
		

		

	}

})

new Admin();