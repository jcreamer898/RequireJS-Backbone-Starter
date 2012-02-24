// This is the main entry point for the App
define(['routers/home'], function(router){
	var init = function(){
		this.router = new router();
	};
	
	return { init: init};
});
