class Voiture {
    constructor(model, marque, annee, type, carburant) {
      this.model = model;
      this.marque = marque;
      this.annee = annee;
      this.type = type;
      this.carburant = carburant;
    }
  }
  
  class Hyndai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
      super(model, marque, annee, type, carburant);
      this.serie = serie;
      this.hybride = hybride;
    }
  
    alarmer() {
      console.log(`Alerte déclenchée sur la Hyndai ${this.model}`);
    }
  }
  
  class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
      super(model, marque, annee, type, carburant);
      this.options = options;
    }
  }
  
  let voitures = [];
  
  let h1 = new Hyndai("Elantra", "Hyndai", 2020, "berline", "essence", "Série A", true);
  let h2 = new Hyndai("Ioniq", "Hyndai", 2018, "compacte", "électrique", "Série B", true);
  let f1 = new Ford("Mustang", "Ford", 2022, "sport", "essence", ["GPS", "Bluetooth"]);
  let f2 = new Ford("Focus", "Ford", 2019, "citadine", "diesel", ["Airbags", "ABS"]);
  
  voitures.push(h1, h2, f1, f2);
  voitures.sort((a, b) => a.annee - b.annee);
  
  for (let i = 0; i < voitures.length; i++) {
    console.log(`${voitures[i]['marque']} ${voitures[i].model} - Année: ${voitures[i].annee}`);
  }

  