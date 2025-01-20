
function setup() {
    createCanvas(windowWidth, windowHeight);
  
    rectMode(CENTER);
    angleMode(DEGREES);
  }
  
  function draw() {
      frameRate(1);
    background(255, 246, 226);
    noStroke();
    
    var difference = 0;
    var seed1 = random(3);
    var seed2 = random(3);
    var seed3 = random(3);
    
    var colors = [
    color(164, 145, 24),
    color(249, 218, 198),
    color(196, 208, 170),
    color(235, 126, 5),
    color(247, 196, 53),
    color(187, 195, 214),
    color(217, 196, 239),
    color(110, 143, 214),
  ];
  
  var figureHeight = (height * 4) / 5;
  var block3Size = random(figureHeight/4, figureHeight/3);
  var block2Height = random(figureHeight/4, figureHeight/3);
  var block2Width = random(figureHeight/4, figureHeight/3);

  if (seed2 >= 2) {
    var difference = block2Height / 1.5 / 2;
  }

  var block1Height = figureHeight - block3Size - block2Height + difference;
  var block1Width = random(figureHeight/3, figureHeight/2);
  
  
    fill(colors[int(random(8))]);
    
    if (seed1 >= 2) {

      circle(width / 2, height - block1Height / 2, (block1Height * 2.1) / 2);
      rect(width / 2, height, (block1Height * 2.1) / 2);
    } else if (seed1 >= 1) {
      rect(width / 2, height - block1Height / 2, block1Width, block1Height);
    } else {
      push();
      translate(width / 2, height - block1Height / 2);
      rotate(180);
      beginShape();
      for (let i = 0; i < 180; i++) {
        var r = block1Height / 1.9;
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
      }
      vertex(-block1Height / 1.9, -block1Height / 2);
      vertex(-block1Height / 4.5, -block1Height / 2);
      vertex(0, 0);
      vertex(block1Height / 4.5, -block1Height / 2);
      vertex(block1Height / 1.9, -block1Height / 2);
      endShape(CLOSE);
      pop();
    }
  fill(colors[int(random(8))]);
    if (seed2 >= 2) {
      rect(
        width / 2,
        height - block1Height - block2Height / 2 / 1.5,
        block2Width,
        block2Height / 1.5
      );
      circle(
        width / 2 - block2Width / 2,
        height - block1Height - block2Height / 2 / 1.5,
        block2Height / 1.5
      );
      circle(
        width / 2 + block2Width / 2,
        height - block1Height - block2Height / 2 / 1.5,
        block2Height / 1.5
      );
    } else if (seed2 >= 1) {
      rect(
        width / 2,
        height - block1Height - block2Height / 2,
        block2Width,
        block2Height
      );
    } else {
      circle(
        width / 2,
        height - block1Height - block2Height / 2,
        block2Height * 1.2
      );
    }
    
    
  fill(colors[int(random(8))]);
    if (seed3 >= 2) {
      circle(
        width / 2,
        height - block1Height - block2Height + difference - block3Size / 2,
        block3Size
      );
    } else if (seed3 >= 1) {
      push();
      translate(
        width / 2,
        height - block1Height - block2Height - block3Size / 2 + difference
      );
      beginShape();
      for (let i = 0; i < 180; i++) {
        var r = block3Size / 1.9;
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
      }
      vertex(-block3Size / 1.9, -block3Size / 2);
      vertex(-block3Size / 4.5, -block3Size / 2);
      for (let i = 0; i < 180; i++) {
        var r2 = block3Size / 4.5;
        var x2 = r * cos(i);
        var y2 = r * sin(i);
        vertex(x2, y2);
      }
      vertex(block3Size / 4.5, -block3Size / 2);
      vertex(block3Size / 1.9, -block3Size / 2);
      endShape(CLOSE);
      pop();
    } else {
      triangle(
        width / 2 - block3Size / 2,
        height - block1Height - block2Height + difference,
        width / 2 + block3Size / 2,
        height - block1Height - block2Height + difference,
        width / 2,
        height - block1Height - block2Height - block3Size + difference
      );
    }
  
    //carinha
    push();
    stroke(77,0,38);
    strokeWeight(3);
    noFill();
    var faceHeight = height - block1Height - block2Height - block3Size / 2.5 + difference;
    translate(
      width / 2,
      faceHeight
    );
    beginShape();
    rotate(45);
    for (let i = 0; i < 90; i++) {
      var r = faceHeight*0.1;
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
    }
  
    endShape();
    rotate(-45);
    fill(0);
    ellipse(-faceHeight*0.1, -faceHeight*0.07, faceHeight*0.02, faceHeight*0.02);
    ellipse(faceHeight*0.1, -faceHeight*0.07, faceHeight*0.02, faceHeight*0.02);
    noStroke();
    fill(241, 78, 79, 60)
    ellipse(faceHeight*0.12, -faceHeight*0.02, faceHeight*0.06, faceHeight*0.04);
    ellipse(-faceHeight*0.12, -faceHeight*0.02, faceHeight*0.06, faceHeight*0.04);
    fill(241, 78, 79)
    circle(0,0,faceHeight*0.05)
    
    pop();
  
    
    noLoop();
  }
  
  function keyReleased() {
    if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
  
    if (key === "g") {
      saveGif("mySketch", 10, { delay: 1 });
    }
  }

  function mousePressed() {
    draw()
  }