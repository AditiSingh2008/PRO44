class Form{
constructor (){
    this.input = createInput("              Name");
    this.input2 = createInput("         Search the country               ");
    this.button2= createButton("      search     ");
    this.button = createButton('Log In');
    this.greeting = createElement('hello');
    this.image=loadImage("seacrh 4.png")
    this.height=10;
    this.width=10;
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    //this.button2.hide();
    //this.input2.hide();
  }
  display(){
   
  this.input.position(500,400);
  this.button.position(560,430);
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    //this.input2.hide();
   // this.button2.hide();
   // var name = this.input.value();
    rgb(255,255,255)
    //this.greeting.html("Hello" + name)
    //this.greeting.position(500,120);
    this.input2.position(500,200);
  this.button2.position(680,200);
  //imageMode(CENTER)
  //image(this.image, 560, 230,10,10);
  
  });
}
}