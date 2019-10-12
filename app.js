var express=require("express"); 
var bodyParser=require("body-parser"); 
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose'); 
// import alert from 'alert-node'
var JSAlert = require("js-alert");

mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 


app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/sign_up', function(req,res){ 
	// var name = 'shivakumar'; 
	// var email ='shiva@gmail.com'; 
	// var pass = '12345'; 
	// var phone ='+9199999978'; 
	var name = req.body.name; 
    var email =req.body.email; 
    var pass = req.body.password; 
    var phone =req.body.phone;

	var data = { 
		"name": name, 
		"email":email, 
		"password":pass, 
		"phone":phone 
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err;
		console.log("Record inserted Successfully",  collection); 
		JSAlert.alert("Record inserted successfully");
	}); 
	
	
		
	// return res.redirect('signup.html'); 
	return res.sendFile(path.join(__dirname+'/signup.html'))
}) 


router.get('/',function(req,res){ 
// res.set({ 
// 	'Access-control-Allow-Origin': '*'
// 	}); 
//  res.sendFile('new.html'); 
res.sendFile(path.join(__dirname+'/index.html'));
// res.end('hello, welcome to login page')
});
app.use('/', router);
app.listen(process.env.port || 3000);

console.log("server listening at port 3000"); 
