function startGame() {
    let sneakyNum = Math.floor(Math.random() * 10) + 1;
    let tryThing = 3;

    for (let potato = 1; potato <= tryThing; potato++) {
        let userBoxStuff = prompt("Guess a number from 1 to 10. Try " + potato + " of 3");

        let beanGuess = Number(userBoxStuff);

        if (beanGuess === sneakyNum) {
            alert("You got it! The number was " + sneakyNum);
            return;
        } else if (beanGuess > sneakyNum) {
            alert("Too high!");
        } else {
            alert("Too low!");
        }
    }

    alert("Game Over! The right number was " + sneakyNum);
}
