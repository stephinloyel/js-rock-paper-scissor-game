let game=confirm("lets play rock,paper,scissor game")
if (game){
    while (game) {
        const playerchoice=prompt("please enter rock,paper,scissor");

        if (playerchoice|| playerchoice===""){

        const playerone=playerchoice.trim().toLowerCase();
        if(
            playerone==="rock"||
            playerone==="paper"||
            playerone==="scissor"
        ) {
            const computerchoice= Math.floor(Math.random() * 3);
            const rpsArray=["rock","paper","scissor"];
            const computer=rpsArray[computerchoice]

        const result=playerone===computer
         ? "tie game": playerone==="rock" && computer==="paper" ?`playerone:${playerone}\n computer:${computer}\ncomputer wins`: playerone=== "paper" &&computer==="scicssor"? `playerone:${playerone}\ncomputer:${computer}\ncomputer wins`: playerone==="scissor"&&computer==="rock"? `playerone:${playerone}\ncomputer:${computer}\ncomputer wins`: `playerone:${playerone}\ncomputer:${computer}\n you wins`;
        
        alert(result);
        const playgame=confirm("play again");
         if (!playgame)  
            alert("ok thanks for playing");
        continue;
        }
        else{
            alert("you didint enter rock paper or scissor");
            continue;
        }
   }   
   else{
    alert("i guess you change your mind. may be next time,");
            break;
        }
    }
}
else{
    alert("okkk. may be next time")
}


