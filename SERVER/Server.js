const express = require("express");
const app = express();
const User = require("./models/User");
const parser = require('body-parser').urlencoded({ extended: false });

const router = express.Router();

app.use(express.static("public"));
app.set("view engine" , "ejs");
app.set("views" , "./views");
app.use('/*', router);

const server = require("http").Server(app);
const io = require("socket.io")(server);
app.use(parser);
const listOnline = [];

io.on("connection" , function(socket){
    console.log("co nguoi vua ket noi " + socket.id);

    listOnline.push(socket.id);
    io.sockets.emit("Server-send-username" , listOnline);

    socket.on("disconnect" , function(){
        console.log(socket.id + " Ngat ket noi");
        OfflinePerson = listOnline.indexOf(socket.id);
        listOnline.splice(OfflinePerson , 1);
        io.sockets.emit("Server-send-disconnect" , listOnline);
    });

    socket.on("Client-send-data" , function(data){
        io.sockets.emit("Server-send-data" , data);
    });
    
});

// app.get("/" , function(req , res){
//     res.render("index");
// });

// router.get('/' , function(req , res , next){
//     res.json([
//         { "name": "Phi Tup" },
//         { "name": "Phi Tup 2" }
//     ]);
// });

server.listen(3000 , () => console.log("Start Server"));
