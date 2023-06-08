let leftBox = document.getElementById("left-box")
let rightBox = document.getElementById("right-box")



function leftDivColor() {
    leftBox.style.backgroundColor = 'purple';
}
function rightDivColor() {
    rightBox.style.backgroundColor = 'green';
    
}

function leftReturn() {
    leftBox.style.backgroundColor = 'silver'
}

function rightReturn() {
    rightBox.style.backgroundColor = 'blue'
}

leftBox.addEventListener('mouseenter', leftDivColor);
rightBox.addEventListener('mouseenter',rightDivColor);
leftBox.addEventListener('mouseleave', leftReturn);
rightBox.addEventListener('mouseleave', rightReturn)