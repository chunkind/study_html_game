window.addEventListener("load", onPageLoaded, false);

function onPageLoaded()
{
    var socket = io.connect("http://127.0.0.1:9892");
    socket.on("get_user_data", function( name )
    {
       alert( "나의 이름은 " + name + "이다" ); 
    });
}
