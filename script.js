window.onload = main;

function main() {
    let directionButton = document.getElementById("direction-start");

    directionButton.onclick = nextDirection;
}

function nextDirection() {
    let directionButton = document.getElementById("direction-start");

    let currentPosition = directionButton.getAttribute("data-current");
    let newPosition = Number(currentPosition) + 1;

    let directionsList = document.getElementById("direction-list").getElementsByTagName("li");

    if (Number(currentPosition) === directionsList.length) {
        return;
    } 

    //console.log(ingredientsList);
    let currentDirection = directionsList[currentPosition];
    //console.log(currentIngredient);
    currentDirection.style.color = "green";

    if (currentPosition > 0) {
        let lastDirection = directionsList[currentPosition - 1];
        lastDirection.style.color = "grey";
        lastDirection.style.textDecoration = "line-through";
    }
    directionButton.setAttribute("data-current", newPosition);

    directionButton.innerText = "" + "Next";
}