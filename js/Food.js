class Food {
  constructor(){
  this.foodStock=0;
  this.image=loadImage('images/Milk.png');
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

  bedroom(){
    background(bedroomImg, 550, 500);
  }

  garden(){
    background(gardenImg, 550, 500);
  }

  washRoom(){
    background(washRoomImg, 550, 500);
  }

  display(){
    var x=80,y=100;
    
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
    
  }
  updateState(state) {
    database.ref('/').update({
    gameState : state
  })
}
   defineState()
    {
        currentTime = hour();

        if(gameState === "hungry"){
            foodObj.display();
            addFood.show();
            feed.show();
            input.show();
            dog.visible = true;
            this.updateState(gameState);
          } if(currentTime === lastFed + 1) {
            foodObj.garden();
            gameState = "playing"
            addFood.hide();
            feed.hide();
            dog.visible = false;
            this.updateState(gameState);
          } else if(currentTime === lastFed + 2) {
            foodObj.bedroom();
            gameState = "sleeping"
            addFood.hide();
            feed.hide();
            dog.visible = false;
            this.updateState(gameState);
          } else if(currentTime >= (lastFed + 2) && currentTime <= (lastFed + 4)) {
            foodObj.washroom();
            gameState = "bathing"
            addFood.hide();
            feed.hide();
            dog.visible = false;
            this.updateState(gameState);
          } else {
            gameState = "hungry"
            foodObj.display();
            addFood.show();
            feed.show();
            input.show();
            dog.visible = true;
            this.updateState(gameState);
          } 

    }
}