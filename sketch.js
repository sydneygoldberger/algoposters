// Sao Paulo: GMT - 3
// Toyko: GMT + 9
// Tel Aviv: GMT + 3
// Amsterdam: GMT + 2

function preload() {
  myFont = loadFont('FoundersGroteskMonoTest-Regular.otf');
}

        
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  button1 = createButton('SAVE');
  button1.mousePressed(saveImage);
  button1.style('font-family', myFont);

  button1.position(windowWidth/2.08, windowHeight/9*8);
  detail = createSlider(4, 29, 4);
  detail.position(20, 60);
  detail.style('width', '300px'); 
}

function draw() {
  sketchImage();

  let myDiv = document.getElementById("myDiv");
  let letter = document.getElementById("letter");
  if (detail.value() == '4'){
    letter.innerHTML = 'A'
  }
  if (detail.value() == '5'){
    letter.innerHTML = 'B'
  }
  if (detail.value() == '6'){
    letter.innerHTML = 'C'
  }
  if (detail.value() == '7'){
    letter.innerHTML = 'D'
  }
  if (detail.value() == '8'){
    letter.innerHTML = 'E'
  }
  if (detail.value() == '9'){
    letter.innerHTML = 'F'
  }
  if (detail.value() == '10'){
    letter.innerHTML = 'G'
  }
  if (detail.value() == '11'){
    letter.innerHTML = 'H'
  }
  if (detail.value() == '12'){
    letter.innerHTML = 'I'
  }
  if (detail.value() == '13'){
    letter.innerHTML = 'J'
  }
  if (detail.value() == '14'){
    letter.innerHTML = 'K'
  }
  if (detail.value() == '15'){
    letter.innerHTML = 'L'
  }
  if (detail.value() == '16'){
    letter.innerHTML = 'M'
  }
  if (detail.value() == '17'){
    letter.innerHTML = 'N'
  }
  if (detail.value() == '18'){
    letter.innerHTML = 'O'
  }
  if (detail.value() == '19'){
    letter.innerHTML = 'P'
  }
  if (detail.value() == '20'){
    letter.innerHTML = 'Q'
  }
  if (detail.value() == '21'){
    letter.innerHTML = 'R'
  }
  if (detail.value() == '22'){
    letter.innerHTML = 'S'
  }
  if (detail.value() == '23'){
    letter.innerHTML = 'T'
  }
  if (detail.value() == '24'){
    letter.innerHTML = 'U'
  }
  if (detail.value() == '25'){
    letter.innerHTML = 'V'
  }
  if (detail.value() == '26'){
    letter.innerHTML = 'W'
  }
  if (detail.value() == '27'){
    letter.innerHTML = 'X'
  }
  if (detail.value() == '28'){
    letter.innerHTML = 'Y'
  }
  if (detail.value() == '29'){
    letter.innerHTML = 'Z'
  }
}

function sketchImage(){
  clear();
  sketch1();
  frameRate(1);
}



function sketch1(){
  erase();
  noFill();
  var variable = floor(detail.value()/2+3);
  var variable2 = floor(detail.value()/5+4);
  var variable3 = floor(detail.value()/5+7);
  console.log(detail.value());
  // torus(radius, tubeRadius, detailX, detailY);    
      for (let i = 0; i<3; i++){
        textFont(myFont);
        textSize(100);
        fill(102);
        stroke("black")
        strokeWeight(.3);
        noFill();
        scale(.8);
        torus(random(180, 205), random(20, 50), variable2, variable3);
        for (let i = 0; i<2; i++){
                strokeWeight(.3);
                torus(random(10, 30), random(20, 50), variable3, variable3);
                for (let i = 0; i<2; i++){
                  strokeWeight(.3);
                  torus(random(180, 205), random(130, 180), variable3, variable3);
               variable
            }
         }
      }
}


function saveImage(){
  save("myimage.png");
}

