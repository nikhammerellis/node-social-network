var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	multipart = require('connect-multiparty'),
	multipartMiddleware = multipart();

var app = express();
var authCtrl = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');
var wasteController = require('./server/controllers/waste-controller');

mongoose.connect('mongodb://localhost/timesuck');

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));



app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//Authentication
app.post('/api/user/signup', authCtrl.signup);
app.post('/api/user/login', authCtrl.login);

//Profile
app.post('/api/profile/updatePhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);

//Waste
app.post('/api/waste/post', wasteController.postWaste);
app.get('/api/waste/get', wasteController.getWastes);

app.listen('3000', function(){
	console.log("Listening on localhost:3000")
});