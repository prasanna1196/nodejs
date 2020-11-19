/*  Instructions
    While executing code, uncomment only the part that has to be executed. 
    Same variable names might have been used in a different section, which may cause error.
*/


// //                         Module

// const tutorial = require('./tutorial.js');
// console.log(tutorial.sum(2,3));
// console.log(tutorial.pi);



// ////////////////////////////////////////////////////////////////////////////////////

// //                        Events

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1 + num2);
//     console.log('tutorial event occured');
// });

// eventEmitter.emit('tutorial',1,3);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }

// const pedro = new Person('Pedro');

// pedro.on('name',() => {
//     console.log('my name is ' + pedro.name);
// })

// pedro.emit('name');



// ////////////////////////////////////////////////////////////////////////////////

// //                      READLINE MODULE

// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                                     output : process.stdout});
// let num1 = Math.floor((Math.random() * 10 ) + 1) ;
// let num2 = Math.floor((Math.random() * 10 ) + 1) ;
// let answer = num2 + num1;

// rl.question(`what is ${num1} + ${num2} ? \n`,
// (userInput) => {
//     if(userInput.trim() == answer){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect response. Try again. \n');
//         rl.prompt();
//         rl.on('line', (userInput) =>{
//             if(userInput.trim() == answer){
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt('Incorrect response. Try again. \n');
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close', () => {
//     console.log('correct!!');
// });



// //////////////////////////////////////////////////////////////////////////////////

// //                      File System Module - 1

// const fs = require('fs');

// // create a file
// fs.writeFile('example.txt', 'this is an example', (err) => {
//     if(err)
//         console.log(err);
//     else{
//         console.log('file successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log(file);
//             }
//         })
//     }

// });

// // delete file
// fs.unlink('example.txt', (err)=>{
//     if(err)
//         console.log('error');
//     else
//         console.log('deleted successfully');
// });



// ///////////////////////////////////////////////////////////////////////////////////

// //                      File system module - 2

// const fs = require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log('err');
//     else
//         console.log('folder created successfully');
//         fs.writeFile('./tutorial/example.txt', 'sample text', (err) => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log('file successfully created');
//         });
// });



// ////////////////////////////////////////////////////////////////////////////////////

// //                              Streams

// const fs = require('fs');
// const readStream = fs.createReadStream('./tutorial.js','utf8');
// const writeStream = fs.createWriteStream('./example2.js');
// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });
// readStream.pipe(writeStream);



// ///////////////////////////////////////////////////////////////////////////////////////

// //                        HTTP module server

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('hello world');
//         res.end();
//     }
//     else{
//         res.write('using some other domain');
//         res.end();
//     }
// });
// server.listen('3000');



// ///////////////////////////////////////////////////////////////////////////////////

// //                 serving static files with http and fs

// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res) => {
//                     const readStream = fs.createReadStream('./static/water.html');
//                     res.writeHead(200, {'Content-type' : 'text-html'});
//                     readStream.pipe(res);
//                 }).listen(3000);






















