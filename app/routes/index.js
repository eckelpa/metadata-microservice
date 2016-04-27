'use strict';

var path = process.cwd();
var multer = require('multer');
var upload = multer({dest: 'uploads/'}).single('userfile');

module.exports = function (app) {

	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html')	;
		});
		
	app.route('/api')
		.post(function(req, res) {
			
			upload(req, res, function(err) {
			
				if (err) {
					console.error(err);
					return;
				}
				
				var size = req.file.size;
				var json = {size: size};
				res.json(JSON.parse(JSON.stringify(json)));

			});
			
	});
	
};
