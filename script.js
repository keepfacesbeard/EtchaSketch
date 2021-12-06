const sketchzone = document.getElementsByClassName('sketchzone')[0];

console.log(sketchzone)

for (let i=1; i<=10000; i++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    square.classList.add(`square${i}`);
    sketchzone.appendChild(square);

}

let sqrs = document.querySelector('.sketchzone');

sqrs.addEventListener('mouseover', function(event){
    let sqr = event.target;
    sqr.style.backgroundColor = "red";
});



