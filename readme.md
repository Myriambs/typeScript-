Introduction à TypeScript

TypeScript est un sur-ensemble de JavaScript, créé par Microsoft, qui ajoute des types statiques à JavaScript. 
TypeScript permet de détecter les erreurs au moment de l'écriture du code (compilation) plutôt qu'à l'exécution,
 ce qui améliore la robustesse et la maintenabilité du code.

 Pourquoi TypeScript est compilé en JavaScript ?

Les navigateurs ne comprennent que JavaScript. TypeScript compile donc le code en JavaScript pour garantir sa compatibilité. 
Les types sont uniquement utilisés pendant la compilation pour détecter les erreurs et ne sont pas présents dans le fichier JavaScript final.

Installation de TypeScript

    Assurez-vous d'avoir Node.js installé.
    Installez TypeScript globalement avec :

============ > npm install -g typescript

Vérifiez l'installation :

=============== >  tsc --version

alors les steps : 
 Initialiser un projet TypeScript

Pour commencer, vous devez installer TypeScript dans votre projet.

================== >  npm init -y
================== > npm install typescript --save-dev

2. Créer le fichier tsconfig.json

Le fichier tsconfig.json sert à configurer le compilateur TypeScript. Pour générer ce fichier automatiquement, utilisez :

============= > npx tsc --init

Cela crée un fichier tsconfig.json dans votre projet avec des options par défaut.

pour la configuration , on a une configuration automatique qui peut bien evidament changer , voici un exemple de configuration qui peut etre utilise pour les debuts .
=====>
{
  "compilerOptions": {
    "target": "es6", // ou un autre target compatible
    "module": "commonjs", // ou un autre module compatible
    "outDir": "./dist", // dossier de sortie pour les fichiers compilés
    "rootDir": "./src", // dossier racine pour les fichiers sources
    "strict": true, // activer les vérifications strictes
    "esModuleInterop": true // facilite l'importation des modules CommonJS
  },
  "include": ["src/*/"], // inclure tous les fichiers TypeScript dans src
  "exclude": ["node_modules"] // exclure le dossier node_modules
}


======================  >  Option : 
4. Créer un script de compilation

Ajoutez un script de compilation dans votre fichier package.json :

"scripts": {
  "build": "tsc"
}

5. Compiler les fichiers TypeScript

Pour compiler les fichiers .ts en .js, exécutez la commande suivante :

npm run build

Les fichiers compilés seront générés dans le dossier dist.

/////////////////////// WARNING ////////////////////////////////////////////

dans le cas de creation d'un fichier tsconfig.jspn juste avant la creation de votre fichier .ts , il se peu que vous allez avoir ce type d'erreur . 
=============>  [{
	"resource": "/home/userName/typescript/tsconfig.json",
	"owner": "typescript",
	"severity": 8,
	"message": "No inputs were found in config file '/home/userName/typescript/tsconfig.json'. Specified 'include' paths were '[\"**/*\"]' and 'exclude' paths were '[]'.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2
}]

ici le problem est juste qu'il faut faire la creation d'un fichier .ts dans le dossier que vous souhaiter . 

NEXT : Add a Sample File

si vous n'avez qucun fichier => , in src/index.ts:

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("Meriam"));

puis Run ( npx tsc  )

////////////////* pour une auto implementation du fichier ts 

===========>  npx tsc --watch

si nn au niveu du fichier package.json , => 

"scripts": {
  "start": "tsc --watch"
}

npm run start


//*// Si vous n’avez pas de tsconfig.json

Sans fichier tsconfig.json, tsc --watch compile uniquement les fichiers spécifiés directement dans la commande.
Exemple :

tsc --watch src/index.ts src/utils.ts


 //*// Ajouter tous les fichiers sans tsconfig.json

Pour compiler tous les fichiers .ts sans utiliser tsconfig.json, vous pouvez utiliser un joker (* ou **).
Exemple :

tsc --watch src/**/*.ts

Cela inclut tous les fichiers .ts présents dans src et ses sous-dossiers.

//*// Autre note : 

dans le cas ou on touche un fichier js et qu'on n'a pas mis la nouvelle ligne de code dans le fichier .ts et on n'a pas executer la compilation , les lignes ajoutée au fichier .js sont ligible . 
donc si vous lier le fichier .js avec un fichier html , a ce moment vous pouvez constater la lecture du contenue de la console.log

=> TypeScript compile les fichiers .ts en fichiers .js lisibles par le navigateur ou Node.js.
Une fois que le fichier .js est généré, c'est ce fichier que le navigateur ou votre application exécute. Le fichier .ts n'est plus directement impliqué dans ce processus

=> Lorsque vous modifiez directement le fichier .js généré :

    Ces changements sont immédiatement visibles lorsque le fichier .js est lié dans une page HTML et lu par le navigateur.
    Le fichier .ts reste inchangé, donc aucune re-compilation n'est nécessaire si vous travaillez uniquement avec le fichier .js.

Cependant, cette pratique a des implications.

MAIS  A SAVOIR :=> 
Si vous modifiez manuellement le fichier .js, ces modifications seront écrasées la prochaine fois que vous compilerez le fichier .ts.
ai,nsi il est mieux d'utilisez uniquement les fichiers .js pour exécution ou déploiement, mais pas pour des modifications manuelles.

l est acceptable de modifier le fichier .js directement :

    Prototypage rapide : Vous voulez tester une modification rapide sans recompiler. mais il ne faut pas oublier   ↑  ↑  


    //*// autre problem : 

    dans le cas ou vous avez deux fichier .ts qui ont les deux le meme contenue code . genre 
    index.ts et test.ts qui ont ce meme contenu 

// let message: string = "Bonjour TypeScript!";
// let age: number = 25;
// let isActive: boolean = true; 



    =>L'erreur que vous obtenez est causée par une collision de noms de variables entre les deux fichiers .ts 
    que vous avez dans votre projet. Lorsque TypeScript compile ces fichiers ensemble, il détecte que des variables 
    avec les mêmes noms (comme message, age, etc.) sont déclarées globalement dans les deux fichiers, ce qui entraîne un conflit.
 dans ce cas , 
 Utiliser des modules ou des namespaces

Encapsulez vos variables et fonctions dans des modules ou namespaces pour les isoler.
Exemple avec un namespace :

Dans workshop1.ts :

namespace Workshop1 {
  export const message = "Hello from Workshop1";
  export const age = 25;
}

Dans index.ts :

namespace Index {
  export const message = "Hello from Index";
  export const age = 30;
}

Lorsque vous voulez accéder à ces variables, vous devez préciser leur namespace :

console.log(Workshop1.message); // "Hello from Workshop1"
console.log(Index.message); // "Hello from Index"

Utiliser des modules ES6 (avec import/export)

Divisez vos fichiers en modules avec des imports et exports explicites. Cela vous permettra d'éviter les variables globales.

Dans workshop1.ts :

export const message = "Hello from Workshop1";
export const age = 25;

Dans index.ts :

import { message as workshopMessage, age as workshopAge } from "./workshop1";

const message = "Hello from Index";
const age = 30;

console.log(workshopMessage); // "Hello from Workshop1"
console.log(message); // "Hello from Index"

Avec cette approche, chaque fichier est isolé, et vous pouvez importer/exporter uniquement ce dont vous avez besoin.