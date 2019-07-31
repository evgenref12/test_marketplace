const mongoose = require('mongoose');
let phone = mongoose.model('phone');

module.exports = {
	create: function(req, res){
		let newPhone = new phone(req.body);
		newPhone.save(function(err, data){
            if(err) {
                console.log("Error with Setting db");
            } else {
                res.json(data);
            }
		});
	},
	remove: function(req, res){
		phone.remove({model: req.body.model}, function(err){
			phone.find({}, function(err, data){
                if(err) {
                    console.log("Error with Setting db");
                } else {
                    res.json(data);
                }
			});
		});
	}
};
