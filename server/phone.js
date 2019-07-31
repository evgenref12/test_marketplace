const mongoose = require('mongoose');
mongoose.connect('mongodb://dbAdmin:79904245@iad2-c7-2.mongo.objectrocket.com:52167,iad2-c7-1.mongo.objectrocket.com:52167,' +
	'iad2-c7-0.mongo.objectrocket.com:52167/Marketplace?replicaSet=ee999a39f676422eab989381fd84f056');
let phoneSchema = new mongoose.Schema({
    model: String,
    price: Number,
    rating: Number,
    features: String
});
mongoose.model("phone", phoneSchema);