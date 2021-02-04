var dog,sadDog,happyDog;

var nm;
var feed,addfood;
var foodSt;
var foodObj;
var database

function preload(){

  sadDog=loadImage("images/Dog.png");
  happyDog=loadImage("images/happy dog.png");
  milk=loadImage("images/Milk.png");

}

function setup() {
 
  database = firebase.database();
  createCanvas(900,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var feed = createButton("feed the dog")
  feed.position(600,100);
  feed.mousePressed(feedDog);
  
  var addfood = createButton("add the food")
   addfood.position(700,100);
   addfood.mousePressed(addFood);

   var input = createInput("dog")
   input.position(900,100)

   var enter = createButton("enter")
   enter.position(900,120);
   enter.mousePressed(dogname);

   nm = input.value();

   
   
      

   


  foodObj = new Food();
  


}

function draw() {
  background(46,139,87);


  foodObj.display();

  
  drawSprites();


  

}


function feedDog(){

 dog.addImage(happyDog);


 foodObj.deductFood();

 

database.ref('/').set({

  food : foodS

})

foodS = foodS-1;

}

function addFood(){

  
  
 foodObj.getFoodStock();




}
 
function dogname(){

 

  fill("red")
  textSize(24)
  text("you dog name " + nm,300,300)
  
}

