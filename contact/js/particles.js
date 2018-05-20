var particles = [];
var particle_count = 200;
var min_distance = 90;

const width = window.screen.width;
const height = window.screen.height;

var canvas;

var context;

setup();

function setup()
{
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");


  canvas.width = width;
  canvas.height = height;

  for(var i = 0; i < particle_count; i++)
  {
    var particle = new Particle();
    particles.push(particle);
  }
}

function Particle() {

  this.x = Math.random() * width;
  this.y = Math.random() * height;

  this.velocityX = -1 + Math.random() * 2;
  this.velocityY = -1 + Math.random() * 2;

  this.accelerationX = 0;
  this.accelerationY = 0;

  this.size = Math.round(2 + Math.random());

  this.enable = function()
  {
    context.fillStyle = "white";
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    context.fill();
  }

  this.motion = function()
  {
    this.velocityX += this.accelerationX;
    this.velocityY += this.accelerationY;

    this.x += this.velocityX;
    this.y += this.velocityY;

    this.accelerationX = 0;
    this.accelerationY = 0;

    if(this.x + this.size > width)
    {
      this.x = this.size;
    }
    else if(this.x - this.size < 0)
    {
      this.x = width - this.size;
    }

    if(this.y + this.size > height)
    {
      this.y = this.size;
    }
    else if(this.y - this.size < 0)
    {
      this.y = height - this.size;
    }

  }

  this.attract = function(other)
  {
    var directionX = other.x - this.x;
    var directionY = other.y - this.y;

    var distance = Math.sqrt(directionX * directionX + directionY * directionY);
    if(distance < min_distance)
    {
      this.accelerationX = directionX/5000;
      this.accelerationY = directionY/5000;

      other.accelerationX = -this.accelerationX;
      other.accelerationY = -this.accelerationY;
    }
  }
}

function draw()
{
  context.fillStyle = 'black';
  context.fillRect(0,0,width,height);
  for (var i = 0; i < particles.length; i++)
  {
    var particle = particles[i];

    particle.motion();
    particle.enable();
    for(var j = 0; j < particles.length; j++)
    {
      if(i!=j)
      {
        var other = particles[j];
        particle.attract(other);
      }
    }
  }
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame   ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function(update){
    window.setTimeout(update, 1000 / 60);
  };
})();


function update() {
  draw();
  requestAnimFrame(update);
}

update();
