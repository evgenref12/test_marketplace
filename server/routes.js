const mongoose = require('mongoose');
let phone = mongoose.model('phone');
let friendsController = require('./phones.js');

module.exports = function(app) {
	app
	.get('/getPhone', function(req, res){
        phone.find({}, function(err, data){
            if(err) {
                console.log("Error with Setting db");
            } else {
                res.json(data);
            }
		})
	})
	.post('/addPhone', function(req, res){
        friendsController.create(req, res)
	})
	.post('/removePhone', function(req, res){
		friendsController.remove(req, res)
	})
	.post('/updatePhone', function(req, res){
        phone.find({_id: '5d4050a3ee4f96bb3e993e7b'}, function(err, data) {
            if(err) {
                console.log("Error with Setting db");
            } else {
                phone.update({_id: req.body._id}, req.body, function(err, data) {
                	if (err) {
                		console.log("--- Error, when it update product in DB ---- " + JSON.stringify(err));
                	} else {
                		console.log("--- Product was updated in DB --- ");
                        res.json(data);
                    }
                });
            }
        })
	});
};
