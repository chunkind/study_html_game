var countMissile = 0;
var playTime = 0;


// 준비 상태
function ReadyState()
{
   soundSystem.PlayBackgroundMusic("background.mp3");
    return this;
}

ReadyState.prototype.Render = function( )
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context  = theCanvas.getContext("2d");
    
    // 배경 화면 그리기
    Context.drawImage(resourcePreLoader.GetImage("img/background.png"), 0, 0);
        
    // 플레이어 그리기
    player.Render( Context ); 
    
    Context.fillStyle = "#ffffff";   
    Context.font = '50px Arial'; 
    Context.textBaseline = "top";
    Context.fillText( "준비", 330, 180 );
        
}

ReadyState.prototype.Update = function( )
{
    if( inputSystem.isKeyDown( 13 ) )// Enter 
    {
        ChangeGameState( new PlayState() );
    }
}
// 준비 상태 //
 
// 게임 상태 // 
function PlayState()
{
    player.Init();
    this.arrMissiles = new Array();
    this.MakeMissile( 50 );
    this.timer = new Timer();
    this.makeMissileSkipper = new FrameSkipper( 5000 );
    soundSystem.PlayBackgroundMusic("Background.mp3");
    return this;
}

PlayState.prototype.Render = function( )
{
    soundSystem.PlayBackgroundMusic("Background.mp3");
    var theCanvas = document.getElementById("GameCanvas");
    var Context  = theCanvas.getContext("2d");

    // 배경 화면 그리기
    Context.drawImage(resourcePreLoader.GetImage("img/Background.png"), 0, 0); 
    // 플레이어 그리기
    player.Render( Context );
    
    // 총알 그리기
    for( var i = 0; i < this.arrMissiles.length; i++ )
    {
        Context.drawImage(resourcePreLoader.GetImage("img/missile.png"), this.arrMissiles[i].x, this.arrMissiles[i].y);  
    }
    
    // 게임 정보
    Context.fillStyle = "#ffffff";
    Context.font = '20px Arial'; 
    Context.fillText( "Time : " + playTime, 20, 5 ); 
    Context.fillText( "총알 수 : " + countMissile , 680, 5 );    
}

PlayState.prototype.Update = function( )
{
    playTime = Math.ceil( this.timer.nowFrame / 100 ) / 10; 
    
    // 플레이어 이동처리
    player.Update();   
    
    this.MoveMissile();
    
    if( this.makeMissileSkipper.isWork() )
    {
        this.MakeMissile( 5 );
    }
}

PlayState.prototype.MoveMissile = function()
{
    var arrMissiles = this.arrMissiles;
    
    // 총알 이동 처리
    for( var i = 0; i < arrMissiles.length; i++ )
    {
        arrMissiles[i].x += arrMissiles[i].go_x * 3;
        arrMissiles[i].y += arrMissiles[i].go_y * 3;
        
        if( player.isCollision( arrMissiles[i].x, arrMissiles[i].y ))
        {
            // 충돌 시 게임 오버
            ChangeGameState( new GameOverState() );
        }
        
        if( arrMissiles[i].x <0 || arrMissiles[i].x > 800 || arrMissiles[i].y < 0 || arrMissiles[i].y > 600 )
        {
            var MissileType = RandomNextInt(4);
            switch( MissileType )
            {
                case 1: // 왼쪽 총알
                    arrMissiles[i].x = 0;
                    arrMissiles[i].y = RandomNextInt(600);
                    arrMissiles[i].go_x = RandomNextInt(2);
                    arrMissiles[i].go_y = -2 + RandomNextInt(4);
                    break;
                case 2: // 오른쪽 총알
                    arrMissiles[i].x = 800;
                    arrMissiles[i].y = RandomNextInt(600);
                    arrMissiles[i].go_x = -RandomNextInt(2);
                    arrMissiles[i].go_y = -2 + RandomNextInt(4);
                    break;
                case 3: // 위쪽 총알
                    arrMissiles[i].x = RandomNextInt(800);
                    arrMissiles[i].y = 0;
                    arrMissiles[i].go_x = -2 + RandomNextInt(4);
                    arrMissiles[i].go_y = RandomNextInt(2);
                    break;
                case 4: // 아래쪽 총알
                    arrMissiles[i].x = RandomNextInt(800);
                    arrMissiles[i].y = 600;
                    arrMissiles[i].go_x = -2 + RandomNextInt(4);
                    arrMissiles[i].go_y = -RandomNextInt(2);
                    break;
            };
        }
    }
};


PlayState.prototype.MakeMissile = function( count )
{
    var arrMissiles = this.arrMissiles;
    
    for( var i = 0; i < count; i++ )
    {
        var MissileType = RandomNextInt(4);
        var intX,intY,intGoX,intGoY;
        switch( MissileType )
        {
            case 1: // 왼쪽 총알
                intX = 0;
                intY = RandomNextInt(600);
                intGoX = RandomNextInt(2);
                intGoY = -2 + RandomNextInt(4);
                break;
            case 2: // 오른쪽 총알
                intX = 800;
                intY = RandomNextInt(600);
                intGoX = -RandomNextInt(2);
                intGoY = -2 + RandomNextInt(4);
                break;
            case 3: // 위쪽 총알
                intX = RandomNextInt(800);
                intY = 0;
                intGoX = -2 + RandomNextInt(4);
                intGoY = RandomNextInt(2);
                break;
            case 4: // 아래쪽 총알
                intX = RandomNextInt(800);
                intY = 600;
                intGoX = -2 + RandomNextInt(4);
                intGoY = -RandomNextInt(2);
                break;
        };
        arrMissiles.push( {x: intX, y: intY, go_x : intGoX, go_y : intGoY} ); 
    }
    countMissile = this.arrMissiles.length;
};

// 게임 상태 // 
// 게임 오버 상태 // 
function GameOverState()
{
    return this;
}

GameOverState.prototype.Render = function( )
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context  = theCanvas.getContext("2d");
    
    // 배경 화면 그리기
    Context.drawImage(resourcePreLoader.GetImage("img/background.png"), 0, 0);
    
    // 플레이어 그리기
    player.Render( Context ); 
    
    Context.fillStyle = "#ffffff";
    Context.font = '50px Arial'; 
    Context.fillText( "게임 오버", 330, 180 ); 

    // 게임 정보
    Context.fillStyle = "#ffffff";
    Context.font = '20px Arial'; 
    Context.fillText( "Time : " + playTime, 20, 5 ); 
    Context.fillText( "총알 수 : " + countMissile , 680, 5 );  
}

GameOverState.prototype.Update = function( )
{
    if( inputSystem.isKeyDown( 13 ) )// Enter 
    {
        ChangeGameState( new PlayState() );
    }    
}
// 게임 오버 상태 //

var player = new function()
{
   this.x = 350;
   this.y = 250; 
   return this;
}

player.Init = function( context )
{
   this.x = 350;
   this.y = 250; 
};


player.Render = function( context )
{
    context.drawImage(resourcePreLoader.GetImage("img/player.png"), player.x, player.y); 
};

player.Update = function( )
{
    if( inputSystem.isKeyDown( 37 ) ) // LEFT
    {
        this.x-=5;
        if( this.x < 0 )
        {
            this.x = 0;
        }
    }
    if( inputSystem.isKeyDown( 39 ) ) // RIGHT
    {
        this.x+=5;
        if( this.x > 740 )
        {
            this.x = 740;
        }     
    }
    if( inputSystem.isKeyDown( 38 ) ) // UP
    {
        this.y-=5;
        if( this.y < 0 )
        {
            this.y = 0;
        }
    }
    if( inputSystem.isKeyDown( 40 ) ) // DOWN
    {
        this.y+=5;
        if( this.y > 540 )
        {
            this.y = 540;
        } 
    }
};


// Constant
var missile_cb_x = 5;
var missile_cb_y = 5;
var missile_cb_width = 20;
var missile_cb_height = 20;

player.isCollision = function( x, y )
{
    if( this.x + 45 >  x + missile_cb_x  && 
        this.x + 15  < x + missile_cb_x + missile_cb_width && 
        this.y + 15  < y + missile_cb_y + missile_cb_height  && 
        this.y + 45  > y + missile_cb_y )
    {
        return true;
    }
        
    return false;
}


function RandomNextInt ( max ) {
  return 1 + Math.floor( Math.random() * max );
}


