## RequireJS and BackboneJS Starter
This application is a starting point to design a modular application using RequireJS, and BackboneJS.  

The build.bat file in the js directory also has scripts to run to build the application with either NodeJS, or Java.  

There are simple examples of how to write a router, view, and model.  

Feel free to fork and use in your own BackboneJS app!!

### Recent Changes as of 1/25/2014
* Update backbone to v1.1.0
* Update underscore to v1.5.2
* Update modernizr to v2.7.2
* Add in source map for underscore-min.js

### Recent Changes as of 3/20/2013
* Update backbone to v1.0.0
* Update underscore to v1.4.4
* Add in source map for backbone-min.js

### Recent Changes as of 7/8/2012
* Backbone > .9 removed all support for AMD modules.
* RequireJS v2 now know longer requires `order.js`
* Use the `shim` config object to have non AMD libraries work with RequireJS
* The original version of this branch is now `oldamd`

This is the latest way to add non AMD libraries to RequireJS.  

```js
require.config({ 
    'paths': { 
  	"underscore": "libs/underscore-min", 
		"backbone": "libs/backbone-min"
	},
	'shim': 
	{
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		}
	}	
}); 
```

Hit me up for questions! @jcreamer898
