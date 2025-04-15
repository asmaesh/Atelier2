
let etudiant1 = {
    nom: "shabi",
    prenom: "Asmae",
    age: 21,
    cne: "CNE123",
   
    etudier: function () {
      console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
    }
  };
  
  let etudiant2 = {
    nom: "oulhiane",
    prenom: "Majed",
    age: 22,
    cne: "CNE456",
    etudier: function () {
      console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
    }
  };
  
  let professeur = {
    nom: "El Achak",
    age: 45,
    cin: "CIN789",
    
    enseigner: function () {
      console.log(`Professeur ${this.nom} est en train d'enseigner.`);
    }
  };
  
  
  let etudiants = [etudiant1, etudiant2];
  
  etudiants.sort(function (a, b) {
    if (a.nom !== b.nom) {
      return a.nom.localeCompare(b.nom);
    } else if (a.prenom !== b.prenom) {
      return a.prenom.localeCompare(b.prenom);
    } else {
      return a.age - b.age;
    }
  });
  
  
  for (let i = 0; i < etudiants.length; i++) {
    console.log(`${etudiants[i].nom} ${etudiants[i].prenom}, Age: ${etudiants[i].age}`);
  }
  