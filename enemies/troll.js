//Troll Enemy
const trollImage = new Image();
trollImage.src = 'sprites/troll.png';

const trollDeath = new Image();
trollDeath.src = 'sprites/trollDeath.png'

class Troll extends Enemy{
	constructor(verticalPosition, delay){
		super(verticalPosition, 0.2, 400, delay);

		//info for applying sprite sheet
		this.sprite = trollImage;
		this.frameX = 0;
		this.frameY = 0; 
		this.minFrame = 0;
		this.maxFrame = 9;
		this.spriteWidth = 1602;
		this.spriteHeight = 1002;
	}

	update(){
		super.update();

		// Cycle through death animation
		if(this.dying){
			this.minFrame = 0;
			this.maxFrame = 8;

			// Switch to death animation sprite sheet
			if (this.sprite == trollImage){
				this.frameX = this.minFrame;
				this.sprite = trollDeath;
			}

			//Set dead to true when end of death animation is reached
			if( this.frameX == this.maxFrame){
				this.dead = true;
			}
			
		}
	}

	draw(){
		// Draw the sprite
		context.drawImage(this.sprite, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 80, this.y - 70, this.width*3.6, this.height*2);
		
		super.draw('Cyan');		
	}

}
