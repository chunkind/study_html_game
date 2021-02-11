var http = require( "http" );
var socketio = require( "socket.io" );

var server = http.createServer(
function( request, response )
{
    response.end('Hello NodeJS'); 
});

server.listen( 9892, function()
{
    console.log("NodeJS Server Start port:9892");
});

var io = socketio.listen( server );
io.set( "log level", 2 );
// 클라이언트 접속
io.sockets.on("connection", function( socket )
{    
    var random = RandomNextInt(5) - 1;
    console.log( "[Client Connected] name : " + names[random] );
    
    socket.emit("get_user_data", names[random] );
});



// Utill
function RandomNextInt ( max ) 
{
  return 1 + Math.floor( Math.random() * max );
}

// Game
var names = ["찬회","동기","철수","재인","동윤"];
