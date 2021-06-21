var playerImg,bgImg,sImg;
var form;
var database;


function preload(){
  
  bgImg=loadImage("bg.jpg")
  sImg=loadImage("seacrh 4.png")
 // AtlasApi()
  //greeting()
  GetTime()
}

function setup(){
 //database = firebase.database();
 //console.log(database);
  createCanvas(500,800);

 // player = createSprite(250,250,10,10);
  //player.addImage("playerImg")

form= new Form()
  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background(bgImg);
 // image (playerImg,200,350,0,0)
   /* if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }*/
    form.display();
    var time=new Date()
    var hour=time.getHours()
    //console.log(hour)

   var name=form.input.value()
    if (hour>=06 && hour<=20){
    form.greeting.html("Good Morning"+name)
   console.log()
    }
  
    drawSprites();
  
}
async function GetTime(){ 
    //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
    //var responseJSON = await response.json();
    //console.log(responseJSON.datetime);
    //var datetime=responseJson.datetime;
    //var hour=datetime.slice(11,13)
    
   
}

/*function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}*/
async function AtlasApi(){
  var response=await fetch("https://countriesnow.space/api/v0.1/countries/capital")
  var responseJSON = await response.json();
console.log(responseJSON)
  //var data=responseJSON.data
  //console.log(capital)
}
