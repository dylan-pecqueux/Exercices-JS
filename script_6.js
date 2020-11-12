function transform(code) {

  finalCode = [];

  let divCode = code.match(/.{1,3}/g);
  divCode.forEach(element => {
    if (element === "UCU" || element === "UCC" || element === "UCG" || element === "AGU" || element === "AGC"){
      finalCode.push("Sérine");
    } else if (element === "CCU" || element === "CCC" || element === "CCA" || element === "CCG"){
      finalCode.push("Proline");
    } else if (element === "UUA" || element === "UUG"){
      finalCode.push("Leucine");
    } else if (element === "UUU" || element === "UUC"){
      finalCode.push("Phénylalanine");
    } else if (element === "CGU" || element === "CGC" || element === "CGA" || element === "CGG" || element === "AGA" || element === "AGG"){
      finalCode.push("Arginine");
    } else if (element === "UAU" || element === "UAC"){
      finalCode.push("Tyrosine");
    }  
  });

  console.log("Voici le resultat pour " + code);

  console.log(finalCode.join("-"));

}

transform("CCGUCGUUGCGCUACAGC");
transform("CCUCGCCGGUACUUCUCG");