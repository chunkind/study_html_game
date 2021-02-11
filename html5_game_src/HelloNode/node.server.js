var http = require('http');

http.createServer(function( request, response )
{
    response.end('Hello NodeJS'); 
}).listen( 8081, function()
    {
        console.log('server is running');
    }
);
