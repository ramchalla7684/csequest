var canvas_seconds;
var context_seconds;

var canvas_minutes;
var context_minutes;

var canvas_hours;
var context_hours;

var canvas_days;
var context_days;

var particlesSeconds = [];
var particlesMinutes = [];
var particlesHours = [];
var particlesDays = [];

var width;
var height;

var textSeconds;
var textMinutes;
var textHours;
var textDays;

var _second = 0;
var _minute = 0;
var _hour = 0;
var _day = 0;

var on;

var canUpdateTime = true;
var firstTime = true;


var days_text;
var hours_text;
var minutes_text;
var seconds_text;

var passed = false;

function preload() {
  textSeconds = textMinutes = textHours = textDays = loadFont('https://alca.tv/static/codepen/pens/common/RobotoMono-Bold.ttf');
}

function setup()
{

  on = document.getElementById('time').dataset.on;

  days_text = document.getElementById('days_text');
  hours_text = document.getElementById('hours_text');
  minutes_text = document.getElementById('minutes_text');
  seconds_text = document.getElementById('seconds_text');

  startSeconds();
  startMinutes();
  startHours();
  startDays();
  update();
  updateTime();
}

function startSeconds()
{
  canvas_seconds = document.getElementById("canvas_seconds");
  context_seconds = canvas_seconds.getContext("2d");

  width = canvas_seconds.clientWidth;
  height = canvas_seconds.clientHeight;

  canvas_seconds.width = width;
  canvas_seconds.height = height;

  context_seconds.fillStyle = 'rgba(255, 255, 255, 255)';
  context_seconds.fillRect(0, 0, width, height);

  context_seconds.imageSmoothingEnabled = true;

  var points = textSeconds.textToPoints(toText(_second), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
  particlesSeconds = [];
  for(var i = 0; i < points.length; i++)
  {
    var particle = new Particle(points[i]);
    particlesSeconds.push(particle);
  }

  if(_second == 1)
  {
    seconds_text.textContent = "second left";
  }
  else
  {
    seconds_text.textContent = "second left";
  }

  setInterval(function() {
    var points = textSeconds.textToPoints(toText(_second), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
    particlesSeconds = [];
    for(var i = 0; i < points.length; i++)
    {
      var particle = new Particle(points[i]);
      particlesSeconds.push(particle);
    }

      if(_second == 1)
      {
        if(passed == true)
        {
          seconds_text.textContent = "second passed";
        }
        else
        {
          seconds_text.textContent = "second left";
        }
      }
      else
      {
        if(passed == true)
        {
          seconds_text.textContent = "seconds passed";
        }
        else
        {
          seconds_text.textContent = "seconds left";
        }
      }

    if(_second >= 59)
    {
      canUpdateTime = true;
    }
    else
    {
      if(firstTime==true)
      {
        canUpdateTime = true;
        firstTime = false;
      }
      else
      {
        canUpdateTime = false;
      }
    }

  }, 1000);

}


function startMinutes()
{
  canvas_minutes = document.getElementById("canvas_minutes");
  context_minutes = canvas_minutes.getContext("2d");

  width = canvas_minutes.clientWidth;
  height = canvas_minutes.clientHeight;

  canvas_minutes.width = width;
  canvas_minutes.height = height;

  context_minutes.fillStyle = 'rgba(255, 255, 255, 255)';
  context_minutes.fillRect(0, 0, width, height);

  context_minutes.imageSmoothingEnabled = true;

  var points = textMinutes.textToPoints(toText(_minute), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
  particlesMinutes = [];
  for(var i = 0; i < points.length; i++)
  {
    var particle = new Particle(points[i]);
    particlesMinutes.push(particle);
  }

    if(_minute == 1)
    {
      minutes_text.textContent = "minute";
    }
    else
    {
      minutes_text.textContent = "minutes";
    }

  setInterval(function() {
    var points = textMinutes.textToPoints(toText(_minute), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
    particlesMinutes = [];
    for(var i = 0; i < points.length; i++)
    {
      var particle = new Particle(points[i]);
      particlesMinutes.push(particle);
    }

      if(_minute == 1)
      {
        minutes_text.textContent = "minute";
      }
      else
      {
        minutes_text.textContent = "minutes";
      }
  }, 1000);

}



function startHours()
{
  canvas_hours = document.getElementById("canvas_hours");
  context_hours = canvas_hours.getContext("2d");

  width = canvas_hours.clientWidth;
  height = canvas_hours.clientHeight;

  canvas_hours.width = width;
  canvas_hours.height = height;

  context_hours.fillStyle = 'rgba(255, 255, 255, 255)';
  context_hours.fillRect(0, 0, width, height);

  context_hours.imageSmoothingEnabled = true;

  var points = textHours.textToPoints(toText(_hour), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
  particlesHours = [];
  for(var i = 0; i < points.length; i++)
  {
    var particle = new Particle(points[i]);
    particlesHours.push(particle);
  }
  if(_hour == 1)
  {
    hours_text.textContent = "hour";
  }
  else
  {
    hours_text.textContent = "hours";
  }

  setInterval(function() {
    var points = textHours.textToPoints(toText(_hour), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
    particlesHours = [];
    for(var i = 0; i < points.length; i++)
    {
      var particle = new Particle(points[i]);
      particlesHours.push(particle);
    }
    if(_hour == 1)
    {
      hours_text.textContent = "hour";
    }
    else
    {
      hours_text.textContent = "hours";
    }
  }, 1000);

}



function startDays()
{
  canvas_days = document.getElementById("canvas_days");
  context_days = canvas_days.getContext("2d");

  width = canvas_days.clientWidth;
  height = canvas_days.clientHeight;

  canvas_days.width = width;
  canvas_days.height = height;

  context_days.fillStyle = 'rgba(255, 255, 255, 255)';
  context_days.fillRect(0, 0, width, height);

  context_days.imageSmoothingEnabled = true;

  var points = textDays.textToPoints(toText(_day), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
  particlesDays = [];
  for(var i = 0; i < points.length; i++)
  {
    var particle = new Particle(points[i]);
    particlesDays.push(particle);
  }
  if(_day == 1)
  {
    days_text.textContent = "day";
  }
  else
  {
    days_text.textContent = "days";
  }

  setInterval(function() {
    var points = textDays.textToPoints(toText(_day), width/6.2, height/1.5, 125, {sampleFactor: 0.125, simplifyThreshold: 0});
    particlesDays = [];
    for(var i = 0; i < points.length; i++)
    {
      var particle = new Particle(points[i]);
      particlesDays.push(particle);
    }
    if(_day == 1)
    {
      days_text.textContent = "day";
    }
    else
    {
      days_text.textContent = "days";
    }
  }, 1000);

}

function updateCanvasSeconds()
{
  context_seconds.fillStyle = 'white';
  context_seconds.fillRect(0, 0, width, height);
  for (var i = 0; i < particlesSeconds.length; i++)
  {
    var particle = particlesSeconds[i];
    particle.motion();
    particle.enable(context_seconds);
  }
}


function updateCanvasMinutes()
{
  context_minutes.fillStyle = 'white';
  context_minutes.fillRect(0, 0, width, height);
  for (var i = 0; i < particlesMinutes.length; i++)
  {
    var particle = particlesMinutes[i];
    particle.motion();
    particle.enable(context_minutes);
  }
}


function updateCanvasHours()
{
  context_hours.fillStyle = 'white';
  context_hours.fillRect(0, 0, width, height);
  for (var i = 0; i < particlesHours.length; i++)
  {
    var particle = particlesHours[i];
    particle.motion();
    particle.enable(context_hours);
  }
}


function updateCanvasDays()
{
  context_days.fillStyle = 'white';
  context_days.fillRect(0, 0, width, height);
  for (var i = 0; i < particlesDays.length; i++)
  {
    var particle = particlesDays[i];
    particle.motion();
    particle.enable(context_days);
  }
}

function updateTime()
{

  getTime();

  setInterval(getTime, 1000);

  function getTime()
  {

    var date = new Date(on) - new Date();

    var seconds = Math.ceil(date/1000);
    var minutes = Math.ceil(seconds/60);
    var hours = Math.ceil(minutes/60);
    var days = Math.ceil(hours/24);

    _second = seconds % 60;
    _minute = minutes % 60;
    _hour = hours % 24;
    _day = days;
  }
}



function Particle(pt)
{
  this.size = 5 + Math.random();

  this.x = pt.x;
  this.y = pt.y;

  this.targetX = pt.x + Math.random() * 4;
  this.targetY = pt.y + Math.random() * 4;

  this.velocityX = Math.random() * 2.5 - 1.25;
  this.velocityY = Math.random() * 2.5 - 1.25;

  this.accelerationX = 0;
  this.accelerationY = 0;

  this.forceX = 0;
  this.forceY = 0;

  this.maxVelocity = 2.5;
  this.maxForce = 0.15;

  this.motion = function() {

    this.getForce();

    this.accelerationX += this.forceX;
    this.accelerationY += this.forceY;

    this.x += this.velocityX;
    this.y += this.velocityY;

    this.velocityX += this.accelerationX;
    this.velocityY += this.accelerationY;

    this.accelerationX = 0;
    this.accelerationY = 0;
  }

  this.enable = function(context) {
    context.fillStyle = "#263238";
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    context.fill();
  }

  this.getForce = function() {
    var directionX = this.targetX - this.x;
    var directionY = this.targetY - this.y;

    var distance = this.magnitude(directionX, directionY);

    if(isNaN(distance))
    {

    }

    var speed = this.maxVelocity;

    if (distance < 8)
    {
      speed = map(distance, 0, 8, 0, this.maxVelocity);
    }

    directionX = (directionX/distance) * speed;
    directionY = (directionY/distance) * speed;

    this.forceX = directionX - this.velocityX;
    this.forceY = directionY - this.velocityY;

    var force = this.magnitude(this.forceX, this.forceY);

    if(isNaN(force))
    {

    }

    if(force > this.maxForce)
    {
      this.forceX = (this.forceX/force) * this.maxForce;
      this.forceY = (this.forceY/force) * this.maxForce;
    }

  }

  this.magnitude = function(x, y) {
    return Math.sqrt(x * x + y * y);
  }
}


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame   ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function( update ){
    window.setTimeout(update, 1000 / 60);
  };
})();


function update() {
  updateCanvasSeconds();
  if(canUpdateTime == true)
  {
    updateCanvasMinutes();
    updateCanvasHours();
    updateCanvasDays();
  }
  requestAnimFrame(update);
}

function toText(t)
{
  if(t<0)
  {
    passed = true;
    t=t*-1;
  }
  if(t<10)
  {
    return '0'+t;
  }
  return t+'';
}
