function Header(){
	this.createDom();
}

//头部和侧面的布局DOM节点
Header.navTemplate = `<nav class="navbar navbar-default navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="/">超市账单管理系统</a>
	    </div>

	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav navbar-right reg-login-link">
	        <li data-toggle="modal" data-target="#loginModal"><a href="/html/login.html">登录</a></li>    
	      </ul>
	      <ul class="nav navbar-nav navbar-right hidden welcome-logout-link">
	        <li><a href="#">欢迎：</a></li>
	        <li><a href="javascript:void(0)" class="logout-link">注销</a></li>      
	      </ul>
	    </div>
	  </div>
	</nav>`;

Header.listTemplate = `
				<div class="list-group">
			  		<a href="#" class="list-group-item active">功能列表</a>
			  		<a href="#" class="list-group-item"><img src="/img/zd.png">账单管理</a>
			  		<a href="#" class="list-group-item"><img src="/img/gys.png">供应商管理</a>
			  		<a href="/html/usermanage.html" class="list-group-item"><img src="/img/yh.png">用户管理</a>
			 	 	<a href="/html/updatePwd.html" class="list-group-item"><img src="/img/mm.png">密码管理</a>
			 	 	<a href="#" class="list-group-item"></img src="img/tc.png">退出系统</a>
				</div>`;

$.extend(Header.prototype,{
	//创建节点
	createDom(){
		//把基本样式追加到 body里
		$(Header.navTemplate).appendTo("header");
		$(Header.listTemplate).appendTo(".left");
	}

});
new Header();