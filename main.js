jQuery(document).ready(function() {
jQuery(".panel.our-work").hide();
jQuery(".panel.about").hide();
jQuery(".panel.contact").hide();
});


function showPanel(val){
  if (val == "ourwork")
    {
      jQuery('.panel.our-work').show("0.25s","linear");
      jQuery(".panel.about").hide();
      jQuery(".panel.contact").hide();
      jQuery(".panel.landing").hide();
    }
  else if (val == "about")
    {
      jQuery('.panel.our-work').hide();
      jQuery(".panel.about").show("0.25s","linear");
      jQuery(".panel.contact").hide();
      jQuery(".panel.landing").hide();
    }
  else if (val == "contact")
    {
      jQuery('.panel.our-work').hide();
      jQuery(".panel.about").hide();
      jQuery(".panel.contact").show("0.25s","linear");
      jQuery(".panel.landing").hide();
    }
  else if (val== "home")
    {
      jQuery('.panel.our-work').hide();
      jQuery(".panel.about").hide();
      jQuery(".panel.contact").hide();
      jQuery(".panel.landing").show("0.25s","linear");
    }
}

//pixiijs code for stars
var app = new PIXI.Application(3000,3000,{transparent:true});
jQuery('.animation-container').append(app.view);

var starSpeedMax = 1;
var starSpeedMin = 0.5;

var sprites = new PIXI.particles.ParticleContainer(2500,{
  scale: true,
  position: true,
  rotation: true,
  uvs: true,
  alpha: true
});
app.stage.addChild(sprites);

var stars = [];

var totalSprites = app.renderer instanceof PIXI.WebGLRenderer ? 2500 : 100;

for (var i = 0; i < totalSprites; i++){
    var star = PIXI.Sprite.fromImage('img/pixel.png');
    //star.tint = Math.random() * 0xE8D4CD;
    star.anchor.set(0.5);
    star.scale.set(Math.random() * (2 - 1.25) + 1.25);
    star.x = Math.random() * app.renderer.width;
    star.y = Math.random() * app.renderer.height;
    star.tint = Math.random() * 0x808080;
    // create a random direction in radians
    star.direction = Math.random() * Math.PI * 2;
    star.speed = Math.random() * (starSpeedMax - starSpeedMin) + starSpeedMin;
    stars.push(star);
    sprites.addChild(star);
  }
// create a bounding box box for the little stars
var starBoundsPadding = 10;
var starBounds = new PIXI.Rectangle(
    -starBoundsPadding,
    -starBoundsPadding,
    app.renderer.width + starBoundsPadding * 2,
    app.renderer.height + starBoundsPadding * 2
);

var tick = 0;

app.ticker.add(function() {

    // iterate through the sprites and update their position
    for (var i = 0; i < stars.length; i++) {

        var s = stars[i];
        s.y += Math.cos(s.direction) * (s.speed);

        if (s.x < starBounds.x) {
            s.x += starBounds.width;
        }
        else if (s.x > starBounds.x + starBounds.width) {
            s.x -= starBounds.width;
        }

        if (s.y < starBounds.y) {
            s.y += starBounds.height;
        }
        else if (s.y > starBounds.y + starBounds.height) {
            s.y -= starBounds.height;
        }
    }

    // increment the ticker
    tick += 0.1;
});
