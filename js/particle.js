var particles = [];

function setup()
{
  var canvas = createCanvas(document.getElementById('canvas_container').offsetWidth, document.getElementById('canvas_container').offsetHeight);
  canvas.parent('canvas_container');
}

function draw()
{
  clear();

  if(this.prevX != mouseX || this.prevY != mouseY)
  {
    let p = new particle();
    particles.push(p);
  }

  for(var i = particles.length-1; i>=0; i--)
  {
    particles[i].motion();
    particles[i].enable();

    if(particles[i].alpha <= 50)
    {
      particles.splice(i, 1);
    }
  }

  this.prevX = mouseX;
  this.prevY = mouseY;
}

function particle()
{
  this.x = mouseX;
  this.y = mouseY;

  this.prevX = -1000;
  this.prevY = -1000;

  this.velocityX = 0;
  this.velocityY = random(-10, -6);

  this.accelerationX = 0;
  this.accelerationY = 0;

  this.forceX = random(-1, 1) * 0.1;
  this.forceY = 0.98;

  this.mass = random(1, 2);
  this.deltaTime = 1;

  this.alpha = 255;

  this.motion = function()
  {

    this.accelerationX = (this.forceX / this.mass);
    this.accelerationY = (this.forceY / this.mass);

    this.velocityX += (this.accelerationX * this.deltaTime);
    this.velocityY += (this.accelerationY * this.deltaTime);

    this.x += this.velocityX;
    this.y += this.velocityY;

    this.alpha-=5;
  }

  this.enable = function()
  {
    stroke(255);
    strokeWeight(4);
    point(this.x, this.y);
  }
}
