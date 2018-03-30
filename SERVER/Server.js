var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine" , "ejs");
app.set("views" , "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

var listOnline = [];

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

app.get("/" , function(req , res){
    res.render("index");
});

server.listen(3000 , () => console.log("Start Server"));
