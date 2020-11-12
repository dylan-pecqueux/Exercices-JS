let myNum = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyra(myNum){
let theNum = 0;
myNum = Number(myNum);

while(theNum < myNum) {
  let numToMult = myNum - theNum - 1
  console.log(" ".repeat(numToMult) + "#".repeat(theNum + 1));

  theNum ++;
}

}

pyra(myNum);