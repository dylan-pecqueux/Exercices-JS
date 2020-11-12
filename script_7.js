
function bot(){

  let choice = prompt("Discute avec le bot :");
  
  while(choice !== "quit"){
  
  

    if (choice[choice.length - 1] === "?" ){
      console.log("ouais ouais..");
    } else if (choice === choice.toUpperCase()){
      console.log("Wow calme toi mon petit bohnome !");
    } else if (choice.indexOf("Fortnite") !== -1){
      console.log("On ce fait une partie ?");
    } else if (choice.length === 0){
      console.log("t'es en PLS ?");
    } else {
      console.log("balek");
    }

    choice = prompt("Discute avec le bot :");

  };

}

bot();