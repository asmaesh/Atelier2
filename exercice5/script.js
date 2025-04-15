console.log("=== Gestion des livres ===");

let livres = ["Le Petit Prince", "1984", "L'Étranger"];
console.log("Initial :", livres);

livres.push("Harry Potter");
console.log("Après ajout à la fin :", livres);

livres.unshift("Les Misérables");
console.log("Après ajout au début :", livres);

livres.pop();
console.log("Après suppression à la fin :", livres);

livres.shift();
console.log("Après suppression au début :", livres);

console.log("\n=== Gestion des catégories ===");

let categories = new Set(["Fiction", "Science", "Histoire"]);
console.log("Initial :", categories);

categories.add("Biographie");
console.log("Après ajout (nouvelle) :", categories);

categories.add("Science"); 
console.log("Après ajout (doublon) :", categories);
categories.delete("Fiction");
console.log("Après suppression :", categories);
console.log("\n=== Gestion des emprunts ===");

let temparr=Array.from(categorie)
let borrows=new Map()
categorie=temparr
for(let i=0;i<livres.length;i++){
    borrows.set(livres[i],categorie[Math.floor(Math.random() *3)])
}
console.log(borrows)
borrows.set("hamid lmzyab",'story')
console.log(borrows)
borrows.set("hamid ww",'storyww')
console.log(borrows)
borrows.set("hamid lmzyabxx",'storyxx')
console.log(borrows)
borrows.set("hamid lmzyabxy")
console.log(borrows)
borrows.delete("hamid lmzyabxx")
console.log(borrows)
console.log(borrows.has("hamid lmzyabxy"))

