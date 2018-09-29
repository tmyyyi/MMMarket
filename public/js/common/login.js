// 登录事件
function Login(){
	this.addListener();
}

$.extend(Login.prototype,{
	//注册事件监听
	addListener(){
		//登录
		$(".btn-Login").on("click",this.loginHandler);
	},
	//登录处理
	loginHandler(){
		console.log(2);
		const url = "/api/user/login",//URL
			data = $(".login-form").serialize();//向服务器提交的数据
		console.log(data);
		$.post(url,data,(data)=>{
			console.log(data);
			//处理响应数据
			if(data.res_code === 1){//登录成功
				//将登录成功的用户信息保存到 sessionStorage 中
				sessionStorage.loginUser = JSON.stringify(data.res_body.data);
				//刷新页面
				window.location.href= "/";
			}else{ //登录失败
				$(".login-error").removeClass("hidden");

			}
		});
	}

});

new Login();