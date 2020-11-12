const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function rented (arrayBook) {
  
  let noRented = 0

  arrayBook.forEach(element => {
    if (element.rented < 1){
      noRented ++
    }
  });

  if (noRented === 0) {
    console.log("Tout les livres ont étaient emprunté au moins une fois")
  } else {
    console.log("Tout les livres n'on pas étaient emprunté au moins une fois")
  }

}

function mostRented (arrayBook){

  

  arrayBook.sort(function (a, b) {

    return a.rented - b.rented;

  });

  console.log("Voici le livre le plus emprunté :");
  console.log(arrayBook[arrayBook.length - 1]);
  console.log("Voici le livre le moins emprunté :");
  console.log(arrayBook[0]);

}

function find (arrayBook){

  arrayBook.forEach(element => {
    if (element.id === 873495) {
      console.log("Voici l'élèment avec l'id : 873495");
      console.log(element);
    }
  });

}

function supp (arrayBook){

  for(let index in arrayBook){
    if (arrayBook[index].id === 133712) {
      console.log("Cet élément viens dêtre supprimer :");
      console.log(arrayBook[index]);
      arrayBook.splice(index, 1);
    }
  };

  console.log("Voici le nouvel array :")
  console.log(arrayBook);

}

function order (arrayBook){

  console.log("Voici les livres classés par ordre alphabétique : ")

  arrayBook.sort(function compare(a, b) {
    if (a.title < b.title)
       return -1;
    if (a.title> b.title )
       return 1;
    return 0;
  });

  arrayBook.forEach(element => {

    console.log(element);

  })

}

rented(books);
mostRented(books);
find(books);
supp(books);
order(books);