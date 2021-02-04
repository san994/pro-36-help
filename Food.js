class Food{


constructor(){

this.foodStock = 20;
// this.image = loadImage("images/Milk.png");

}

getFoodStock(){

  this.foodStock = this.foodStock + 1

}

deductFood(){

 this.foodStock = this.foodStock - 1

}

display(){

var x = 80,y = 100;

imageMode(CENTER)
 image(milk,750,220,70,70)

if(this.foodStock!=0){

for(var i=0 ; i<this.foodStock ; i++){

  if(i%10===0){

  x=80;
  y=y+50;

  }

  //imageMode(CENTER)
  image(milk,x,y,50,50)
  x=x+30

 }

}

}



}