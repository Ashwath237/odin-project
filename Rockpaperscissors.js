console.log("Hello guys play rock paper scissors with me!!!")

const prompt = require('prompt-sync')(); //for intializing input library

function humanchoice(){
    let choice = prompt(`choose one: 1 for rock, 2 for paper, 3 for scissors `); 
    //taking input from the user
    return choice;
}



function forRandom(){

    let math = Math.floor(Math.random()* 3 + 1); 
    // math.floor eliminates decimals and approx the whole no. math.random for random nos
    //for randominzing the computer's side
    return math;
}



function forLogic(userPick , computerPick){
    if (userPick == computerPick) //tie logic
    {
        console.log("Tie");

    
    }
    else if (userPick == 1 && computerPick == 3)
        {  //rock beats scissors
        console.log('Win :) :)');


    }

    else if (userPick == 2 && computerPick == 1)
    { //paper beats rock
        console.log('Win :)')

    }
    
    else if (userPick == 3 && computerPick == 2)
    { //scissors beat paper
        console.log('Win :)');
    }
    
    else if (userPick == 1 && computerPick == 2)
    { //paper beat rock
        console.log('Lose :(');
    }
    
    else if (userPick == 2 && computerPick == 3)
    { //scissor beat paper
        console.log('Lose :(');
    }
    
    else if (userPick == 3 && computerPick == 1)
    { //rock beat scissor
        console.log('Lose :(');
    }
    
}


let playAgain = true;// loop for gameover

while(playAgain){
    let userPick = humanchoice();
    console.log("You picked: "+ userPick); //output
    
    let computerPick = forRandom();
    console.log("Computer picked: " + computerPick);//output for computer decided
    
    forLogic(userPick, computerPick); //calling forLogic
    
    let answer = prompt("Play again? (yes/no):");
    //asking if user want to coninue or not
    
    if (answer == "no") {
    playAgain = false; //for stopping the loop
    }

}

console.log("Game Over!!"); //ouput after the end of the program 
