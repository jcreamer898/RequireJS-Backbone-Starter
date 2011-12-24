require.config({ 
    'paths': { 
		"underscore": "libs/underscore", 
		"backbone": "libs/backbone"
	}
}); 

require([
	'order!libs/underscore',
	'order!libs/backbone',
	'order!app'
	], 
	function(_,Backbone,app){
		app.init();
});