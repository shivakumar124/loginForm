const express=require('express');
const http =require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
// const { signIn, welcome, refresh } = require('./handlers')

 const hostname='127.0.0.1';
const port = 3000;
const app = express();

// const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

let handlerequest = (request, response)=>{
    response.writeHeader(200,{
        
    })

fs.readFile('./index.html', null, function (error, data) {
    if (error) {
        response.writeHead(404);
        respone.write('Whoops! File not found!');
    } else {
        response.write(data);
    }
    response.end();
});
};

http.createServer(handlerequest).listen(3000);

// fs.readFile('index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         console.log("111111",response)
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(port);
// });
// const users = {
//     user1: 'password1',
//     user2: 'password2'
//   }
// app.post('/signin', signIn)
// app.get('/welcome', welcome)
// app.post('/refresh', refresh)

  

// const server =http.createServer((req,res)=>{
//     console.log('Status Code',res.statusCode)
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     // return res.redirect('http://google.com');

//     res.end('hello, welcome to login page')
    
// })

// http.listen(port,()=>{
//     // redirect('index.html'); 
//     console.log('server sunning at port',port)
// })

app.get('/',(req,res)=>{
    res.send('Login Details')
});
