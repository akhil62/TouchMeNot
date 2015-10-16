var Engine = Matter.Engine,
  World = Matter.World,
  Body = Matter.Body,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Contact = Matter.Contact,
  Detector = Matter.Detector,
  Events = Matter.Events;

var engine = Engine.create(document.body, {
  render: {
    options: {
      label: 'Engine',
      showAngleIndicator: false,
      gravity: {
        x: 0,
        y: 1
      },
      wireframes: false
    }
  }
});
var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint);
var polygonOptions = {
  render: {
    sprite: {
      //texture: 'http://icons.iconarchive.com/icons/hopstarter/scrap/128/Aqua-Ball-icon.png'
    }
  }
};
var particles = Composites.stack(200, 20, 2, 2, 0, 0, function(x, y, column, row) {
  return Bodies.polygon(x, y, Math.round(Common.random(4, 10)), 74, polygonOptions);
});
var triggerOptions = {
  render: {
    sprite: {
      texture: 'http://www.fancyicons.com/free-icons/218/mixed/png/48/black_ball_48.png'
    }
  }
};
var trigger = Bodies.polygon(170, 450, 8, 20, triggerOptions);
//var to Identifying collision
//var to collision event
//var game over condition
World.add(engine.world, [particles, trigger]);
var offset = 15;
World.add(engine.world, [
  Bodies.rectangle(400, -offset, 800 + 2 * offset, 50, {
    isStatic: true
  }),
  Bodies.rectangle(400, 600 + offset, 800 + 2 * offset, 50, {
    isStatic: true
  }),
  Bodies.rectangle(800 + offset, 300, 50, 600 + 2 * offset, {
    isStatic: true
  }),
  Bodies.rectangle(-offset, 300, 50, 600 + 2 * offset, {
    isStatic: true
  })
]);
Engine.run(engine);

var footer = document.createElement('footer');
footer.className = 'page-footer';
footer.innerHTML = '<center><p class="white-text">All rights reserved. &copy; copyrights 2015, Touch me not. </p></center>';
document.body.appendChild(footer);

$(document).ready(function() {
  Materialize.toast('Move the Black ball with out touching other objects.', 5000, 'rounded');
  $('.modal-trigger').leanModal();
})