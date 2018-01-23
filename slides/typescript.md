##  TypeScript

----

## Plan

- Introduction.<!-- .element: class="fragment highlight-blue" -->
- Typage statique.
- Classes et Interfaces. 
- Modules.
- Structures de contrôle.
- Environnement de développement.
- Conclusion.

----
## Introduction

- TypeScript est un langage de programmation ouvert et gratuit.
- C'est un logiciel libre,  fortement soutenu par Microsoft.
- Créé par Anders Hejlsberg, le créateur de  C#.
- Basé sur les normes ECMAScript 4 et 6.

note:
ECMAScript est une norme de langage, tandis que JavaScript est un dialecte de ce langage.
JavaScript a été initialement créé pour Netscape.

----

## Qu'est-ce que TypeScript ?

- C'est un surensemble de JavaScript
  - Java script avec quelques améliorations
  - Tout programme JavaScript est un programme TypeScript valable.
  
- Pourquoi a-t-on besoin d'un «JavaScript++» ? 
  - Pour répondre à cette question, il faut d'abord comprendre les limitations de JavaScript.<!-- .element: class="fragment" -->


----
## Quel est le problème ?

- Pourquoi les développeurs détestent JavaScript?

![](resources/the-good-parts.jpg)<!-- .element: style="width:60%" -->

[comment]: # (> Using state of the art software engineering practices)

----
## Quel est le problème ?

- JavaScript a été pensé pour écrire des petits programmes.
- Mais maintenant il est utilisé pour faire des programmes complexes.
- JavaScript n'est pas adapté aux programmes de taille importante:
  - Plus le code devient complexe, plus il devient difficile à maintenir.

----
## Et quelles sont les solutions apportées par TypeScript ? 

- Le [typage statique](https://fr.wikipedia.org/wiki/Typage_statique).
- Les classes et les interfaces des langages à objets.
- Les modules et l'exportation entre modules.
  - Meilleure organisation du code source.

note:
Les modules existent en JavaScript depuis ECMAScript 2015.

----
## Plan

- Introduction
- Typage statique<!-- .element: class="fragment highlight-blue" -->
- Classes et Interfaces. 
- Modules
- Structures de contrôle.
- Environnement de développement.
- Conclusion

----
## Qu'est-ce que le «Typage statique» ? 

- C'est le contraire du typage dynamique ! 😉
- C'est une technique qui permet d'associer un type à une variable.
- Par exemple:

Typage dynamique, `i` est une variable:
```ts
var i;
```
Typage statique, `i` est une variable de type `number`:
```ts
var i: number;
```

----
## Autres exemples 

Typage dynamique, `add()` est une fonction:
```ts
function add(x, y) {
    return x + y;
}
```

Typage statique, `add()` est une fonction de type `number`  et qui prend en paramètre deux arguments de type `number`:
```ts
function add(x : number, y : number) : number {
    return x + y;
}
```

----
## Types de base

Type | Mot-clé | Description
--|-- 
Number	| number | Utilisé pour représenter les nombres entier et les fractions (à virgule flottante).
String	| string | Séquence de caractères Unicode.
Boolean	| Boolean | Valeurs logiques, vrai et faux.


----
## Valeurs

Type | Mot-clé | Valeurs
--|-- 
Number	| number | 1.5, 2, 3.14 
String	| string | "To be or not ...".
Boolean	| Boolean | true, false


----
## Types spéciaux

Type | Mot-clé | Description
--|-- 
Void	| void | Utilisé comme type de retour d'un fonction qui ne retourne pas de valeur (une procédure).
Null	| null | Représente l'absence intentionnelles de valeur d'un objet.
Undefined | undefined | Valeur des variables non initialisées.


----
## Quelles sont les conséquences du typage statique ?

- On écrit plus de code
- Certaines erreurs sont détectées très tôt, pendant le codage. 
- Le code devient plus lisible. 

----
## Détection d'erreurs de typage

En JavaScript:

```js
// Adds two numbers
function add(x, y) {
    return x + y;
}

add("toto", 31) // evaluates to "toto31"
add(12,24) // evaluates to 36
```

```ts
// Multiplies two numbers
function mul(x, y) {
    return x * y;
}

mul("toto", 31) // evaluates to NaN (Not a Number)
```

----

En TypeScript:
```js
// Adds two numbers
function add(x : number, y : number) {
    return x + y;
}

add("toto", 31) // ERROR
add(12,24) // evaluates to 36
```

```ts
// Multiplies two numbers
function mul(x : number, y : number) {
    return x * y;
}

mul("toto", 31) // ERROR
```

----
## Plan

- Introduction
- Typage statique.
- Classes et Interfaces <!-- .element: class="fragment highlight-blue" -->
- Modules.
- Structures de contrôle.
- Environnement de développement.
- Conclusion.

----
## Classes et Interfaces

- TypeScript introduit explicitement deux concepts de la programmation à objets, les _classes_ et les _interfaces_.
- Ces concepts étaient déjà présents en JavaScript, bien que dissimulés.
- Mais avant de parler des mystérieux concepts des langages à objets, nous allons nous intéresser aux _enregistrements_.


----
## Enregistrements

- En informatique, un enregistrement est une structure de données composée d'un ensemble de valeurs potentiellement de types différents. 

![](resources/png/enregistrement.png)

----

- Contrairement à un tableau, le nombre de champs (ou éléments) d'un enregistrement est fixe.
- Et contrairement à un tableau, les champs d'un enregistrement sont dépendants les uns des autres.

![](resources/png/tableaux.png)

----
## Avantages des enregistrements

- Manipulation plus simple de données complexes: déclaration de variables, passage de paramètres, etc.
- Les valeurs qui ont un sens ensemble, restent ensemble.

----
## Enregistrements en TypeScript

- On utilise le mot-clé `interface`:

```ts
interface Address {
    street: string
    number: number
    city: string
}

interface Point {
    x : number
    y : number
}
```

----
## Enregistrements
### Variables et fonctions

```ts
let a : Address = { street: "50 Otages", number: 1, city: "Nantes" }

function formatAddress(anAddress : Address) {
    return anAddress.street + ", nb:" + anAddress.number + 
        ". " + anAddress.city
}
```

----
## Exemple

```ts
interface Address {
    street: string
    number: number
    city: string
}

let a : Address = { street: "50 Otages", number: 1, city: "Nantes" }

function formatAddress(anAddress : Address) {
    return anAddress.street + ", nb:" + anAddress.number + 
    ". " + anAddress.city
}

document.body.innerHTML = formatAddress(a);
```

----
## Plan

- Introduction
- Typage statique.
- Classes et Interfaces 
- Modules <!-- .element: class="fragment highlight-blue" -->
- Structures de contrôle.
- Environnement de développement.
- Conclusion.


----
## Modules 

- Le modules sont la réponse de TypeScript pour organiser un code trop long.

![](resources/png/modules.png) <!-- .element: style="width:40%"-->

----

- L'objectif est d'organiser le code dans différents _modules_ et de l'importer au besoin.
- En TypeScript, n'importe quel fichier source contenant les mots-clés `import` ou `export`.

[comment]:# (In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.)

----
## Exemple d'exportation

```ts
interface Address {
    street: string
    number: number
    city: string
}

export {Address}
```
Fichier `address.ts`

----
## Exemple d'importation

```ts
import {Address} from "./address"


let myAddress : Address = {street : "Coulimers", 
                          number : 131, city : "Nantes"};
```

Fichier `main.ts`

----
## Plan 

- Introduction.
- Typage statique.
- Classes et Interfaces. 
- Modules.
- Structures de contrôle.<!-- .element: class="fragment highlight-blue" -->
- Environnement de développement.
- Conclusion.

----
## Tableaux
- Les tableaux sont similaires à ceux de JavaScript

En JavaScript:

```js
var list = [ ];
var list = [1.12, 5.54, 6.14]
var list = new Array();
```

En TypeScript:

```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // Generic Array Type
let list: Array<number> = new Array();
```


----
## Conditionnels 


    si (age < 18)
        alors Ecrire(‘Vous êtes mineur(e)’); 
        sinon Ecrire(‘Vous êtes majeur(e)’);
    fin si

```ts
let age : number = 43;
if (age < 18) {
    Ecrire(‘Vous êtes mineur(e)’);
} else {
    Ecrire(‘Vous êtes majeur(e)’);
}
```

```ts
if (x < 0) {
    x = -x;
}
```

----
## Boucle `for`

En JavaScript: 
```js
for(i=1; i <= 10; i=i+1) { 
    // instructions
}
```

En TypeScript:

```ts
for(let i : number = 1; i <= 10; i=i+1) { 
    // instructions
}
```

----
## Boucle `for..of`

```ts
let list: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let each of list) {
    sum = sum + each;
}
```

----

## Boucle `while` 

```ts
let num:number = 5; 
let factorial:number = 1; 
let i: number = num;

while(i >=1) { 
   factorial = factorial * i; 
   i--; 
} 
```

[comment]: # (document.body.innerHTML = `The factorial of  ${num} is ${factorial}`;)



----
## Plan 

- Introduction.
- Typage statique.
- Classes et Interfaces. 
- Modules.
- Structures de contrôle.
- Environnement de développement.<!-- .element: class="fragment highlight-blue" -->
- Conclusion.

----

## Environnement de développement

- Cycle de développement en TypeScript:
  1. Édition de code;
  2. Traduction vers JavaScript;
  3. Exécution:
    - En ligne de commande;
    - À l'intérieur d'un fichier HTML;
    - Dans une console dédiée. 

----
## Édition de code

- Environnement web.
- Editeurs génériques: Emacs, VIM, ATOM, etc.
- IDEs: Eclipse, IntelliJ IDEA, etc.
- [Visual Studio Code](http://code.visualstudio.com)

----
## Visual Studio Code

![](resources/png/vscode.png) <!-- .element style="position:absolute; left:00px;  width:150px; top:10px;">-->

###Demo

----
## Traduction vers JavaScript

- TypeScript [Playground](https://www.typescriptlang.org/play/index.html) 
- Ligne de commande (avec NodeJS):

```shell
tsc main.ts
```

----
## Exécution

- [Console JavaScript](https://jsconsole.com);
- Ligne de commande (avec NodeJS):

```shell
node main.js
```

----
## Commandes spéciales

- Sortie de données.

Exécution en ligne de commande:
```
console.log("Mon message");
```
Exécution dans un browser:

```
document.body.innerHTML = "Mon message"
```


----
## Plan 

- Introduction.
- Typage statique.
- Classes et Interfaces. 
- Modules.
- Structures de contrôle.
- Environnement de développement.
- Conclusion.<!-- .element: class="fragment highlight-blue" -->

----

## Résumé de TypeScript

- Typage statique
- Classes et interfaces.
- Modules
- Compatible avec toutes les bibliothèques JavaScript.
- Prise en main simple.
- Environnement de développement très complet et de prise en main facile.

----
## Inconvénients

- Un nouveau langage à apprendre (même s'il est simple à appréhender et très proche de JavaScript).
- Vous devez toujours apprendre JavaScript.
  - Comprendre la traduction TypeScript -> JavaScript vous apprendra à bien coder en JavaScript.

----
## Conclusion

- Les modules et les enregistrements améliorent:
  - Le passage à l'échelle.
  - La réutilisation.
- Le typage statique améliore:
  - La détection d'erreurs
  - La lisibilité du code.

