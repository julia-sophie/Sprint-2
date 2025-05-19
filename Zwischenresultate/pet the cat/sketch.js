let bg;
let showImg = true;
let cnv;
let imgUrl;
let imgUrl2;
let imgUrl3;
let catloaded;
let hearts;

let s = function (sketch){
    sketch.preload = function() {
        imgUrl = browser.runtime.getURL('images/boxcat.jpg');
        bg = sketch.loadImage(imgUrl);
        imgUrl2 = browser.runtime.getURL('images/hand.png');
        hand = sketch.loadImage(imgUrl2);
        imgUrl3 = browser.runtime.getURL('images/hearts.jpg');
        hearts = sketch.loadImage(imgUrl3);

      };
    
    sketch.setup = function(){
        cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

        cnv.position(0, 0);

        cnv.style('position',        'fixed');
        cnv.style('top',             '0');
        cnv.style('left',            '0');
        cnv.style('z-index',         '999999');   // as high as you like
        cnv.style('pointer-events',  'auto');     // clicks still go through or not
      
        //sketch.noLoop();

    };

    sketch.draw = function(){
        //setTimeout(function () {
        sketch.imageMode(sketch.CORNER)    
        sketch.image(bg, 0, 0, sketch.width ,sketch.height, 0, 0, bg.width, bg.height, sketch.COVER);
            
            sketch.textSize(40);
            sketch.fill(255,70,255);
            sketch.stroke(0);
            sketch.strokeWeight(6);
            sketch.textAlign(sketch.LEFT, 0);
            let t = 'You seem stressed. Pet the cat before you continue scrolling!';
            sketch.text(t, sketch.windowWidth / 20, 150, sketch.windowWidth, 200);
            
            //sketch.fill(255,0,0);
            //sketch.noStroke();
            //sketch.ellipse(sketch.mouseX, sketch.mouseY, 20,20);
            sketch.image(hand, sketch.mouseX - 40, sketch.mouseY - 40, 80, 80);

        // do something after x sec
        //}, 4000);

        // if statement of frame count (framecount % 239 == 0)
        if (sketch.frameCount % (600 - 1) == 0) {      // 60 fps * 10 --> framecount
            sketch.loadcat();
            
            // within this function a boolean is turned to true to check whether image is shown
            catloaded = true;
        }
    };
    
    sketch.windowResized = function() {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        sketch.redraw();
    };
    
    // define a function to draw the cat to screen
    sketch.loadcat = function(){
        // in there check the boolean from above to determine whether 
        if (catloaded == false) {
            cnv.show();
        }
    };
    
    sketch.mousePressed = function() {

        cnv.hide();
        // reset boolean that checks whether image is loaded
        catloaded = false;
    }

}


//start it
new p5(s);


