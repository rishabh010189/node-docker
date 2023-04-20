const fs = require('fs');
const http = require('http');
const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const app = express();

function initializeServer(){

    app.use('/', express.static(path.resolve(__dirname, 'public')))
    
    app.use(bodyParser.json())
    app.post('/signin', (req, res) => {
        console.log(req.body);
        res.json({status: 'OK'})
    })
}



function createServer(){
    app.get('/', (req, res) => {
        res.send('hello from express');
    })

    app.get('/express', (req, res) => {
        res.send('yeh hui na baat');
    })

    app.post('/express-post', (req, res) => {
        res.send('you sent a post request...');
    })
    // const server = http.createServer((req, res) => {
    //     console.log(req.url);
    //     switch(req.url){
    //         case '/' : res.write('Hello world from server...yayy');break;
    //         case '/champu' : res.write('tera baap champuu !!'); res.statusCode = 481; break;
    //         default: res.write('I dont know what to do !!'); res.statusCode = 564;
    //     }
        
    //     res.end();
    // })
    
    // server.listen(5500, '127.0.0.1', () => {
    //     console.log('we are ready for incomming request')
    // })

    app.listen(5500, '0.0.0.0');
}

function writeFile(name,content){
    fs.writeFileSync(name, content);
}

function readFile(name) {
    console.log(fs.readFileSync(name, 'ascii'))
}

module.exports = {
    initializeServer,
    writeFile,
    readFile,
    createServer
}