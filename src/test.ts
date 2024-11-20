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
  