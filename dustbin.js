class dustbin {
	constructor(x,y)  {
		this.x=x;
		this.y=y;
		this.width= 200;
		this.height= 213;
		this.thickness=20;
		this.image= loadImage("dustbingreen.png");

		this.bottomWall=Bodies.rectangle(this.x, this.y, this.width,this.thickness, {isStatic:true});

		this.leftWall=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,
		this.thickness,this.height,{isStatic:true});

		this.rightWall=Bodies.rectangle( this.x+this.width/2, this.y+this.height/2,this.height/2, this.thickness,
		this.height, {isStatic:true});
		
		World.add(world, this.bottomWall);
		World.add(world, this.leftWall);
		World.add(world, this.rightWall);

	}
	display()
	{
		var posBottom=this.bottomWall.position;
		var posLeft=this.leftWall.position;
		var posRight=this.rightWall.position;
	
	push()
	translate(posLeft.x,posLeft.y);
	rectMode(CENTER);
    angleMode(RADIANS);
	fill("red");
	rotate(this.angle);
	pop()

	push()
	translate(posRight.x,posRight.y);
	rectMode(CENTER);
	angleMode(RADIANS);
	fill("red");
	rotate(-1*this.angle);
	pop()

	push()
	translate(posBottom.x,posBottom.y+10);
	rectMode(CENTER);
	angleMode(RADIANS);
	fill(255);
	imageMode(CENTER);
	image(this.image,0,-this.height/2,this.width,this.height);
	pop()
	
	}
}