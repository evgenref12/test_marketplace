let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let port = 8000;
let app = express();

app.use(express.static(path.join('./clients')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require("./server/phone.js");
require("./server/routes.js")(app);

app.listen(port, function(){
	console.log("Listening at port: " + port);
});
