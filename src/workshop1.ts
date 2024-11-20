// first part 
// Différences entre TypeScript et JavaScript

// TypeScript étend JavaScript en y ajoutant :

//     Types statiques : Pour définir les types des variables, paramètres et retours de fonctions.
//     Vérifications à la compilation : Pour détecter les erreurs avant l'exécution.
//     Fonctionnalités modernes : TypeScript supporte des fonctionnalités avancées comme les interfaces, les génériques et les décorateurs.

// Exemple en JavaScript :

// function AAddition(a, b) {
//   return a + b;
// }

// console.log(addition(5, "10")); // Résultat : "510" (concaténation, pas addition)

// Même exemple en TypeScript :

function AAddition(a: number, b: number): number {
  return a + b;
}

// Erreur détectée à la compilation
// console.log(addition(5, "10")); 





// Types primitifs
let message: string = "Bonjour TypeScript!";
let age: number = 25;
let isActive: boolean = true;

// Type tableau
let fruits: string[] = ["Pomme", "Banane", "Orange"];

// Type union
let id: string | number = 123;

// Type any (à éviter)
let valeur: any = "texte";
valeur = 10;

// Type null et undefined
let rien: null = null;
let indefini: undefined = undefined;


//***************function  */

// Fonction typée
function addition(a: number, b: number): number {
    return a + b;
  }
  
  // Fonction avec type `void`
  function afficherMessage(message: string): void {
    console.log(message);
  }
  
  // Appel de fonctions
  console.log(addition(5, 10));
  afficherMessage("Bienvenue dans le cours TypeScript !");

  
  ///*****************interface */

  interface Utilisateur {
    id: number;
    nom: string;
    email: string;
    actif: boolean;
  }
  
  const utilisateur: Utilisateur = {
    id: 1,
    nom: "Alaadine",
    email: "ala.maamer12@gmail.com",
    actif: true,
  };
  
  console.log(utilisateur.nom);

  
  ///////////////////**class */
  class Voiture {
    marque: string;
    modele: string;
    annee: number;
  
    constructor(marque: string, modele: string, annee: number) {
      this.marque = marque;
      this.modele = modele;
      this.annee = annee;
    }
  
    afficherDetails(): void {
      console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Année: ${this.annee}`);
    }
  }
  
  const voiture = new Voiture("Toyota", "Corolla", 2020);
  voiture.afficherDetails();

  //*************modules */

//   Fichier mathUtils.ts :

export function Addition(a: number, b: number): number {
  return a + b;
}

export function soustraction(a: number, b: number): number {
  return a - b;
}

// Fichier main.ts :

// import { addition, soustraction } from "./mathUtils";

console.log(addition(10, 5)); // 15
console.log(soustraction(10, 5)); // 5


///*************type generique */

function afficherElements<T>(elements: T[]): void {
    elements.forEach(element => console.log(element));
  }
  
  afficherElements<number>([1, 2, 3]);
  afficherElements<string>(["A", "B", "C"]);
  
//*****************asynchrone */
// import axios from "axios";

async function fetchUtilisateurs(): Promise<void> {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const utilisateurs = response.data; // Axios place les données de la réponse dans `data`
    console.log(utilisateurs);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }
}

// Appel de la fonction
fetchUtilisateurs();