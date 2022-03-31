var userWins = 0;
var compWins = 0;

function askName() {
    var name = prompt("Welcome to Twenty what is your name?");
    return name
}

var name = askName();

function greeting(a) {
    alert(`Welcome to 20 ${a}! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press "y".`);
}

greeting(name);

function ranNumber() {
    var ranNum = Math.floor(Math.random() * 10) + 1
    return ranNum
}
function mainGame() {
    do {
        function userTurn() {
            var userNum = 0;
            alert("It is now the users turn");
            do {
                var ranNum = ranNumber()
                var userNum = Math.floor(userNum + ranNum);
                alert(`The new number is ${ranNum}. The User total is ${userNum}`);
                if (userNum > 20) {
                    alert(`You got ${userNum}. Because you went over 20, the computer wins`);
                    compWins++
                    break;
                }
                var userRequest = prompt("Would you like another number? If you would like to stop press `n` to stop.");
                if (userRequest == "n") {
                    alert(`You stopped at ${userNum}`)
                    break;
                }
                
            } while ((userRequest != "n") || (userNum < 20));
            return userNum
        }
        var userNum = userTurn()
            if (userNum <= 20) {
            function compTurn() {
            alert("Now its the computers turn");
            var compNum = 0;
            do {
                var ranNum = ranNumber()
                var compNum = Math.floor(compNum + ranNum);
                alert(`The new number is ${ranNum}. The computer total is ${compNum}`);
            } while (compNum < 16)
            return compNum
            }
        var compNum = compTurn();
            
        if (compNum > 20) {
            alert("The computer has gone over 20 you win the round");
            userWins++
        } else if (compNum >= 16) {
            alert(`The computer will stop at ${compNum}`);
            function compareNum() {
                if (compNum > userNum) {
                    alert(`You lose i got ${compNum} and you guessed ${userNum}`);
                    compWins++
                } else if ((userNum > compNum) && (userNum <= 20)) {
                    alert(`You win. You got ${userNum} and i got ${compNum}`);
                    userWins++
                } else if ((userNum == compNum) && (userNum <= 20)){
                    alert(`We tied i got ${compNum} and you also gott ${userNum}`);
                }
            }
            compareNum()    
            }
        }
        alert(`The current score is User ${userWins}, and Computer ${compWins}`);
        var play = prompt("Would you like to play again? Press `y` to play again. Any other key will exit the program");
    } while (play == "y")
    
    if (compWins > userWins){
        alert(`Thank you for playing, The final score was User ${userWins}, and Computer ${compWins}. I win`);
    } else if (userWins > compWins) {
        alert(`Thank you for playing, The final score was User ${userWins}, and Computer ${compWins}. You win`);
    } else {
        alert(`Thank you for playing, The final score was User ${userWins}, and Computer ${compWins}. We tie`);
    }
    
}
mainGame()