class Game{
    constructor(){

    }
    

    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){gameState=data.val();}) 
        
    }

    

       

        update (state){
            database.ref('/').update({gameState:state})
        }
        
        begin (){
            if(gameState === 0){
                player = new Player()
                player.getCount()
                form = new Form()
                form.display();
               
            }
            

            character1 = createSprite(40,200,50,50);
            character1.shapeColor = "blue";

            character2 = createSprite(40,270,50,50)
            character2.shapeColor = "red";
            //adding character 1 & 2 to array
            characters =[character1,character2]

            
        }   
        
        play(){
             form.hide();
             textSize(30);
             text("Game Start", 120, 100)
             Player.getPlayerInfo();
             if(allPlayers !== undefined){
                var index = 0
                var x;
                var y =0;
                  for(var plr in allPlayers){
                           
                           index = index+1;
                           x = displayWidth - allPlayers[plr].distance
                           characters[index-1].x = x
                           characters[index-1].y = 0

                        if(index === player.index){
                            camera.position.x = characters[index-1].x
                            camera.position.y = displayHeight/2
                        }
                           
                        


        }

        drawSprites()
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=20
            player.update(); 
           } 
    }



  }
}