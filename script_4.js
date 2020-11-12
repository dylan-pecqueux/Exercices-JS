const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function searchYear(arrayEntr){

  console.log("Voici les entrepreneurs nés dans les années 70 :")

  arrayEntr.forEach(element => {
    if (element.year < 1980 && element.year > 1969) {
      console.log(element);
    }
  });

}

function searchName(arrayEntr){

  console.log("Voici les noms et prénoms des entrepreurs :")
  let arrayFinal = [];

  arrayEntr.forEach(element => {

    arrayFinal.push(element.first + " " + element.last);

  });

  console.log(arrayFinal);

}


function ageNow(arrayEntr){

  console.log("Voici l'age des entrepreneurs aujourd'hui :")
  
  arrayEntr.forEach(element => {
    
    console.log( element.first + " " + element.last + " aurait aujourd'hui => " + (2020 - element.year) + " ans");
    
  });
  
}

function order(arrayEntr){

  console.log("Voici les entrepreneurs classé par ordre alphabétique :")

  arrayEntr.sort(function compare(a, b) {
    if (a.last < b.last)
       return -1;
    if (a.last> b.last )
       return 1;
    return 0;
  });

  arrayEntr.forEach(element => {

    console.log(element);

  })
  

}

searchYear(entrepreneurs);
searchName(entrepreneurs);
ageNow(entrepreneurs);
order(entrepreneurs);