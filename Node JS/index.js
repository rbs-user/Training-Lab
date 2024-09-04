// file-system , os , path , http , event

const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");

// fs.writeFileSync("read.txt", "Welcome to Techno NJR");
// // buffer :> binary data self file data divide into multiple parts and send to request one.

// let data = fs.readFileSync("read.txt");
// console.log(data.toString());//using buffer

// fs.writeFileSync("read.txt","Hello everyone"); // over write 

// fs.appendFileSync("read.txt","How Are you "); // update present one

// fs.renameSync("read.txt","readWrite.txt"); 

// fs.writeFile("read.txt","test this",(err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File created");
//     }
// }));

// fs.appendFile("read.txt"," working succesfully",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("update done");
//     }
// });

// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data);
// }); // read file
// console.log("After sync");


// fs.unlink("read.txt",(err)=>{
//     console.log("File deleted");
// }); // delete file

// fs.mkdir("Folder",(err)=>{
//     console.log("folder created");
// });

// fs.writeFile("./Folder/read.txt","hello world",(err)=>{
//     console.log("file created");
// });

// fs.unlink("./Folder/read.txt",(err)=>{
//     console.log("file deleted");
// });
// fs.rmdir("Folder",(err)=>{
//     console.log("folder deleted");
// });

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());

// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);

// console.log(path.dirname("D:/College Work/3rd Year/Training-Lab/Node JS"));
// console.log(path.extname("D:/College Work/3rd Year/Training-Lab/Node JS"));
// console.log(path.basename("D:/College Work/3rd Year/Training-Lab/Node JS"));
// console.log(path.parse("D:/College Work/3rd Year/Training-Lab/Node JS"));

// console.log(path.join("class","user","guide","ref"));
// console.log(path.resolve("user","oot","type","hello"));


const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("welcome to http server");
    }else if(req.url == "/about"){
        res.end("You are on About Page");
    }else{
        res.end("Unknown Page");
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running on 3000 port");
    
});
