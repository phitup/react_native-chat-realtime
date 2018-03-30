var socket = io("http://localhost:3000");

socket.on("Server-send-username" , function(username){
    $("#list").append("<div id='member-list'>" + username + "</div>");
})

$(document).ready(function(){
    $(".wrapper").hide();

    $("#VaoChat").click(function(){
        $(".login").hide(2000);
        $(".wrapper").show(2500);
        socket.emit("Client-send-username" , "HELLO");
    });

    $("#LogOut").click(function(){
        $(".login").show(2000);
        $(".wrapper").hide(2000);
    });


});