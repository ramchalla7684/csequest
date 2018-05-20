let canvas;
let context;

const width = window.screen.width;
const height = window.screen.height;

let particles = [];
let nParticles = 250;

var direction = -1;

    var lastScrollTop = 0;

document.addEventListener('DOMContentLoaded', function() {

  document.addEventListener("scroll", function() {

    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop)
    {
      direction = -1;
      update();
    }
    else
    {
      direction = -1;
      update();
    }
    lastScrollTop = st;


});

start();
});

function start() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;


  addParticles();
}

function update()
{
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  for(var i = 0; i<particles.length; i++)
  {
    particles[i].draw();
  }


  // window.requestAnimationFrame(update);
}


function addParticles()
{

  for(var i = 0; i<nParticles; i++)
  {
    var particle = new Particle();
    particles.push(particle);
  }
}


function Particle() {

  this.x = -width + Math.random() * 2 * width;
  this.y = -height + Math.random() * 2 * height;

  this.depth = width;

  this.radius = 1;

  this.draw = function () {

    if(direction == 1)
    {
      this.movein();
    }
    else
    {
      this.moveout();
    }

    context.fillStyle = "#ffffff";
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fill();
  }


  this.movein = function() {

    var w = -width/6 + Math.random() * 2 * width/6;
    var h = -height/6 + Math.random() * 2 * height/6;


    this.x += (width/2 - this.x)/30;
    this.y += (height/2 - this.y)/30;

    this.radius = Math.max(this.radius - 0.1, 2);

    if(this.x < (width/2 + w) && this.x > (width/2 - w) && this.y > (height/2 - h) && this.y < (height/2 + h))
    {
      this.x = -width + Math.random() * 2.5 * width;
      this.y = -height + Math.random() * 2.5 * height;

      if(this.x < (width/2 + 2*w) && this.x > (width/2 - 2*w))
      {
          this.x = (this.x + 2*w);
      }
      if(this.y > (height/2 - 2*h) && this.y < (height/2 + 2*h))
      {
        this.y = (this.y + 2*h);
      }

      this.radius = 4;
    }

  }

  this.moveout = function() {

    this.x -= (width/2 - this.x)/30;
    this.y -= (height/2 - this.y)/30;

    var offsetX = width/6;
    var offsetY = height/6;

    this.radius = Math.min(this.radius + 0.1, 2.5);

    if(this.x < 0 - offsetX || this.x > width + offsetX || this.y > height + offsetY || this.y < 0 - offsetY)
    {
      this.x = -width + Math.random() * 2 * width;
      this.y = -height + Math.random() * 2 * height;
      this.radius = 1;
    }
  }
}

function map(value, min1, max1, min2, max2)
{
  return (value - min1)*(max2 - min2)/(max1 - min1) + (min2);

}

window.requestAnimationFrame(update);
