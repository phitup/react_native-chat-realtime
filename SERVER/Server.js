var express = require("express");
var app = express();

app.set("view engine" , "ejs");
app.set("views" , "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

io.on("connection" , function(socket){
    console.log("co nguoi vua ket noi" + socket.id);

    socket.on("disconnect" , function(){
        console.log(socket.id + " Ngat ket noi");
    });

    socket.on("Client-send-data" , function(data){
        console.log(data);
        io.sockets.emit("Server-send-data" , data);
    });

    socket.on("Client-send-username" , function(data){
        // io.sockets.emit("Server-send-username" , data);
        console.log(data);
    })
});

app.get("/" , function(req , res){
    res.render("index");
});

server.listen(3000 , () => console.log("Start Server"));
