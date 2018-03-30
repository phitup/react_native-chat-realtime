var socket = io("http://localhost:3000");

var id = "";

socket.on("Server-send-username" , function(data){
    $("#list").html("");
    data.forEach(username => {
        $("#list").append("<div id='member-list'>" + username + "</div>"); 
        id = username;
    });
})

socket.on("Server-send-disconnect" , function(data){
    $("#list").html("");
    data.forEach(username => {
        $("#list").append("<div id='member-list'>" + username + "</div>"); 
    });
});

socket.on("Server-send-data" , function(data){
    $("#Chat-Box").append("<div id='Content'>"+ data + "</div>");
});

$(document).ready(function(){
    $(".wrapper").hide();

    $("#VaoChat").click(function(){
        $(".login").hide(2000);
        $(".wrapper").show(2500);
    });

    $("#LogOut").click(function(){
        $(".login").show(2000);
        $(".wrapper").hide(2000);
    });

    $("#Send").click(function(){
        socket.emit("Client-send-data" , $("#ContentChat").val());
        $("#ContentChat").val("");
    });

});