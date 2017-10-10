var song;
var value = 0
var GRAVITY = 3
var JUMP = 7
var man


function setup() {
    createCanvas(screen.width, 400);
    song = loadSound('Soundtest.mp3');
    man = new Man();
    ghost = new Ghost();

    //man.setCollider( 100, 100, screen.width*2, 200)
    //platform = createSprite(screen.width*2, 200)
  }




function mouseClicked() {
    ghost.takesnapshot()
    if ( song.isPlaying()) {
    song.stop();
    value = 0;
    }
    else {
    song.loop();
    value = 255;
 }
}


 function draw() {

     background(0);
    fill(0)
     ellipse(width/2, 100, mouseX *0.1, mouseX *0.1)
     fill(0);
    rect(0, 310, screen.width*2, 200);

    ghost.show();

    man.show();



    }

 function Man() {
	this.velocity = 0
	this.x = width/2
	this.y = height/2
	this.show = function() {
		if ((this.x + this.velocity) > width){
			this.x = width
			this.velocity = -this.velocity
		} else if ((this.x + this.velocity)<0 ) {
			this.x = 0
			this.velocity = -this.velocity
		} else {
			this.x += this.velocity
		}
    }
 }
      function Jump() {
    if(keyPressed(32))
     this.velocity1 = 0
        man.velocity1.y = JUMP;
    
    man.velocity1.y += GRAVITY;
    
    if(man.position.y<0)
      man.position.y = 0;
    
	this.move = function(direction) {	
        this.velocity += direction
	}
    this.jump = function(direction) {
        this.velocity += direction
    }
}




   function Ghost() {
     //fill(value);
     //ellipse(mouseX, mouseY, 30, 20);
     this.savedsnapshots = []
     this.show = function (){
         stroke(255)
         fill(255)
         ellipse(mouseX, mouseY, 80, 30) *0.01  ;

         for (i=0; i<this.savedsnapshots.length; i++) {
             ellipse(this.savedsnapshots[i].x, this.savedsnapshots[i].y, 80, 30)
         }

     }

     this.takesnapshot = function() {
      if (this.savedsnapshots.length<3){
       this.savedsnapshots.push({x:mouseX, y:mouseY})
      }
     }
   }
 //function jump() {
     //man.jump=(GRAVITY * 1ms + (-GRAVITY) * (GRAVITY*1ms)^2)
 //}


 function keyPressed() {
    console.log(keyCode);
    if(keyCode == RIGHT_ARROW) {
        man.move(1);
     }
      else if (keyCode == LEFT_ARROW) {
        man.move(-1);
      }
    man.velocity.y = JUMP
}
 //function jump() {
     //man.jump=(GRAVITY * 1ms + (-GRAVITY) * (GRAVITY*1ms)^2)
 


