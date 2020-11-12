function fact(myNum){

  let finalNum = 1;
  let initNum = 1;
  myNum = Number(myNum);


  while(initNum <= myNum) {
    finalNum *= initNum;
    initNum ++;
  }
  
  return finalNum;
}

console.log(fact(prompt("De quel nombre veux-tu calculer la factorielle ?")));
