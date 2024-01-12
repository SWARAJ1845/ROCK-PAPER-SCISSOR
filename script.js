let userscore = 0;
let computerscore= 0; 
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#computerscore");

// to generate random computer choice

const gencompchoice = () => {

        const options = ["rock", "paper", "scissors"];
       const randidx =  Math.floor(Math.random()*3);
       return options[randidx];

}

// if game was draw then 

const drawgame = () => {
   console.log("game draw. play again");
     msg.innerText ="Game is draw . Play again " ;
     msg.style.backgroundColor = "#081b31";
};

 // To show the winner of game 

const showwinner = (userwin) => {
        if(userwin){
            userscore++;
            userscorepara.innerText = userscore ;
            console.log("you win");
            msg.innerText = "you win !";
            msg.style.backgroundColor = "green";

        }
        else {
            computerscore++;
            compscorepara.innerText = computerscore;
            console.log("computer win");
            msg.innerText ="computer win!" ;
            msg.style.backgroundColor = "red";
        }
}

// all game logic is here 

const playgame = (userchoice) =>{
      
           console.log("user choice = ", userchoice);
           // generate computer choice 
            const compchoice = gencompchoice();
            console.log("computer choice : ",compchoice);

            if(userchoice===compchoice){
                // draw game
                drawgame();
            } else {
                let userwin=true;
                if(userchoice==="rock") {
                    // scissor , paper
                    userwin = compchoice === "paper" ? false : true;
                }  else  if(userchoice==="paper"){
                    // rock , scissor
                   userwin =  compchoice === "scissors" ? false : true ;
                }  else {
                    // rock, paper 
                   userwin =  compchoice === "rock" ? false : true ; 
                }

                showwinner(userwin);
            }

};

// To get the choices from user 

choices.forEach((choice) =>{
         choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            
            playgame(userchoice);
         });
});