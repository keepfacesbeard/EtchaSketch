const sketchzone = document.getElementsByClassName('sketchzone')[0];
let color = "black"
let rainbow = false;
console.log(sketchzone)

function changeColor(newcolor) {
    color = newcolor;
    let drpbtn = document.getElementsByClassName('dropbtn')[0];
    drpbtn.style.backgroundColor = newcolor;
}


for (let i=1; i<=10000; i++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    square.classList.add(`square${i}`);
    sketchzone.appendChild(square);

}

let sqrs = document.querySelector('.sketchzone');
sqrs.addEventListener('mouseover', function(event){
    
    if (event.target.classList.contains("squares")) {
        let sqr = event.target;
        if (rainbow == false) {
            sqr.style.backgroundColor = `${color}`;
        }
        else if (rainbow == true) {
            sqr.style.backgroundColor = multiColor();     
        }
    }
});


function resetSketch() {
    for (let i=1; i<=10000; i++) {
        let resetsqr = document.querySelector(`.square${i}`);
        resetsqr.style.backgroundColor = 'white';
        rainbow = false;
    }
    disengageRainbow();
}

const rainbowbutton = document.getElementById('rainbow');
disengageRainbow();

function engageRainbow() {
    rainbow = true;
    rainbowbutton.textContent="Turn Off Rainbow";
    rainbowbutton.removeEventListener('click', engageRainbow);
    rainbowbutton.addEventListener('click', disengageRainbow);
}
function disengageRainbow() {
    rainbow = false;
    color = 'black';
    rainbowbutton.textContent="Turn On Rainbow";
    rainbowbutton.removeEventListener('click', disengageRainbow);
    rainbowbutton.addEventListener('click', engageRainbow);
}

function multiColor(){
    let randoR = (Math.random()*255);
    let randoG = (Math.random()*255);
    let randoB = (Math.random()*255);
    color = `rgb(${randoR}, ${randoG}, ${randoB})`;
    return color;
}