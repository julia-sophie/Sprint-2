console.log("KITTENS!")

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
    elt.style['background-color'] = '#FF00FF';
}

/*
let filename = "kitten.jpg";

let img = document.getElementsByTagName('img');

for(let imgElt of img) {
    const filePath = `images/${filename}`;
    const url = browser.runtime.getURL(filePath);
    imgElt.src = url;
    console.log(url);
}

*/

let s = function (sketch){
    sketch.setup = function(){
        document.body.style['userSelect'] = 'none';
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth, h);
        c.position(0,0);
        c.style('pointer-events', 'none');
        sketch.clear();

    }

    sketch.draw = function(){
        sketch.stroke(0);
        sketch.strokeWeight(4);
        if (sketch.mouseIsPressed) {
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }
}

let myp5 = new p5(s);