function TestState2()
{    
  this.imgTest = new Image();
  this.imgTest.src = "teststate2.png";
  return this;
}

TestState2.prototype.Update = function() 
{
   
}


TestState2.prototype.Render1 = function() 
{
  var theCanvas = document.getElementById("GameCanvas");
  var Context  = theCanvas.getContext("2d");
  
  Context.drawImage(this.imgTest, 300, 200);
}
