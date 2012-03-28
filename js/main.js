// This set's up the module paths for underscore and backbone
require.config({ 
    'paths': { 
		"underscore": "libs/underscore", 
		"backbone": "libs/backbone",
        "marionette": "libs/backbone.marionette"
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
