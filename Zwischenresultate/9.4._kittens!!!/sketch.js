console.log("KITTENS!")

let paragraphs = document.getElementsByTagName('p');
for (p of paragraphs) {
    p.textContent = 'Miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau';
}

let titles = document.getElementsByTagName('h1', 'h2', 'h3', 'h4', 'h5', 'h6');
for (t of titles) {
    t.textContent = 'Miaaauuu';
}

let filename = "kitten.jpg";

let img = document.getElementsByTagName('img');

for(let imgElt of img) {
    const filePath = `images/${filename}`;
    const url = browser.runtime.getURL(filePath);
    imgElt.src = url;
    console.log(url);
}

let s = function (sketch){
    sketch.setup = function(){
        //document.body.style.userSelect="none";
        let h = document.body.clientHeight;
        
        let c = sketch.createCanvas(sketch.windowWidth, h);
        sketch.pixelDensity(1);
        c.position(0, 0);
        const canvas = c.canvas;
        console.log(canvas);
        canvas.style.position = "fixed"
        canvas.style.pointerEvents = "none"
        
        
    }

    sketch.draw = function(){
        // use this to have transparent background
        sketch.clear();
        sketch.fill(0,0,255);
        sketch.noStroke();
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 20,20)
    }
}

let myp5 = new p5(s);