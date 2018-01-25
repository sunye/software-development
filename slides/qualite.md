## Qualité de code

### Amélioration de la lisibilité du code

----

> «Any stupid can write the program that computer understands but only good programmers write code that humans understand» – Martin Fowler

----
## Plan

- Introduction<!-- .element: class="fragment highlight-blue" -->
- Conventions de codage
- Nommage de variables et de fonctions
- Éviter des mauvaises interprétations
- Esthétique
- Commentaires
- Simplification du flot de contrôle
- Conclusion

----
## Introduction

- La qualité d'un logiciel est généralement définie comme le «degré pour lequel un système, un composant ou un processus répond aux besoins spécifiés.»
- Différents points de vue: utilisateurs, développeurs, gestionnaires, etc.
- Différents facteurs: robustesse, efficacité, portabilité, maintenabilité, etc.

----
## Une question de point de vue

- Ici, nous nous intéressons au point de vue des développeurs et à la maintenabilité du code.
- Critères de maintenabilité: concision, cohérence, modularité, simplicité, documentation interne. 


----
## Principes

- Plus le code est simple à lire, plus il est maintenable.
- Le code doit réduire le temps de lecture et compréhension pour les autres développeurs.


----
## Plan

- Introduction
- Conventions de codage<!-- .element: class="fragment highlight-blue" -->
- Nommage de variables et de fonctions
- Éviter des mauvaises interprétations
- Esthétique
- Commentaires
- Simplification du flot de contrôle
- Conclusion

----
## Conventions de codage

- La plupart des langages n'ont pas de règles complexes pour le nommage de fonctions et variables:
  - N'importe quelle chaine de caractères alphanumériques est un identifiant valide. 
  
- Cependant, tous les langages ont des règles d'écriture appelées «conventions de codage».
  - Proposées par les créateurs du langage ou par la communauté de développeurs. 

----
## En TypeScript

- Variables et fonctions utilisent le "camelCase": on utilise les majuscules pour séparer les noms composés:

Nom | camelCase
--|--
"first name" | `firstName`
"stop threads and quit" | `stopThreadsAndQuit`

----
Conseillé:
```ts
let message : string = 'Hello world!'
let maxNumberOfWords = 15
function writeLine(line : string) {...}
```
Déconseillé:
```ts
let MESSAGE : string = 'Hello world!'
let max_number_of_words = 15
function WriteLine(line : string) {...}
```

----

- Classes et interfaces utilisent le "PascalCase": la première lettre de chaque mot est en majuscule:

Nom | PascalCase
--|--
"gregorian calendar" | `GregorianCalendar`
"book library" | `BookLibrary`

----

Conseillé:
```ts
interface LabelledValue {...}
interface Point3D {...}
interface GraduateStudent {...}
```
Déconseillé:
```ts
interface Labelled_Value {...}
interface POINT3D {...}
interface graduatestudent {...}
```

----
## Plan

- Introduction
- Conventions de codage
- Nommage de variables et de fonctions<!-- .element: class="fragment highlight-blue" -->
- Éviter des mauvaises interprétations
- Esthétique
- Commentaires
- Simplification du flot de contrôle
- Conclusion

----
## Nommage de variables et de fonctions. 

----
## Une question de taille

- Évitez les identifiants d'un seul caractère:
  - p. ex. `a`, `b`, `f`.

- La taille doit être proportionnelle à la portée:
  - Petite portée, noms courts.
  - Large portée, noms longs.

----
Une variable globale:
```ts
declare var maximumNumberOfActiveThreads: number;
```

Une variable dont la portée est restreinte:

```ts
function sumArray(values : number[]): number {
    let sum: number;
    for (let each of list) {
        sum = sum + each;
    }
    return sum;
}
```

----
## Une question de précision

- Les noms des identifiants doivent être précis.
- p. ex. une fonction qui calcule la taille d'un arbre:

```ts
function size(tree: Tree): number {
    //(...)
}
```
- De quoi s'agit-il? De la hauteur? Du nombre d'éléments? De l'empreinte mémoire? 

![](resources/png/binary-tree.png)<!-- .element: style="width:30%;"  -->

----
![](resources/png/binary-tree.png)<!-- .element: style="width:30%;"  -->

Alternatives:

```ts
function height(tree: Tree): number {}

function numberOfNodes(tree: Tree): number {}

function footprint(tree: Tree): number {}
```

----
## Évitez les noms génériques

- p. ex. `tmp`, `aux` ou `retval` veulent souvent dire: «- Je ne sais pas comment appeler ma variable»:

```ts
function euclideanNorm(values: number[]): number {
    let retval: number = 0;
    for(let i : number = 0; i  < values.length ; i+=1) {
        retval += values[i] * values[i]
    }
    return Math.sqrt(retval);
}
```

----

- Le code est lisible, mais l'identifiant de la variable (`retval`) n'apporte aucune information.
- Maintenant, supposons que le développeur ait remplacé par erreur `*` par `+`.
- Quelle erreur est la plus visible:

```ts
retval += values[i] + values[i]
```
Ou:

```ts
sumOfSquares += values[i] + values[i]
```

----

### Exception 

- Parfois `tmp` désigne vraiment une valeur temporaire:

```ts
    if(begin > end) {
        let tmp: number = end;
        end = begin;
        begin = tmp;
    }
```

----
## Itérateurs de boucle

- Traditionnellement, les identifiants `i`, `j` et `k` désignent des itérateurs de boucle:

```ts
for(let i : number = 0; i < 10; i+=1) {
    for(let j : number = 0; j < 20; j+=1) { 
        for(let k : number = 0; k < 40; k+=1) { 
            // instructions
        }
    }
}
```

----
## Valeurs avec unités

- Parfois, ajouter l'unité de mesure simplifie la lisibilité.
- p. ex. la fonction `wait(delay)`:

```ts
function wait(delay: number){}
```

- De quelle unité de temps s'agit-il? Secondes? Millisecondes?
- Alternative:

```ts
function wait(delayMilliseconds: number){}
```

----

Considérez par exemple: 

```ts
let start: number = now();
treatmentThatTakesTime();
let elapsed = now() - start;
console.log("The execution took " + elapsed.toString() + "seconds")
```

Et:

```ts
let startMilliseconds: number = now();
treatmentThatTakesTime();
let elapsedMilliseconds = now() - startMilliseconds;
console.log("The execution took " + 
    elapsedMilliseconds.toString() + "seconds")
```

Lequel des deux morceaux de code révèle plus facilement l'erreur?


----
## Autres exemples

Identifiant | Identifiant enrichi
-- | -- 
name | unicodeName
path | absoluteFilePath, relativeFilePath
password | encodedPassword

----
## Plan

- Introduction
- Conventions de codage
- Nommage de variables et de fonctions
- Mauvaises interprétations<!-- .element: class="fragment highlight-blue" -->
- Esthétique
- Commentaires
- Simplification du flot de contrôle
- Conclusion

----
## Mauvaises interprétations

- Certains identifiants sont source de confusion. 
- Par ex.:

```ts
results = filter(clients, "birthyear  > 2000")
```

- Qu'est-ce qu'on filtre exactement?
   - Les client nés après l'année 2000?
   - Ou le contraire? 
- Si le premier cas: `select()` est un meilleur nom.
- Si le deuxième, `reject()` ou `exclude()`?


----

> -- Il s’appelle Juste Leblanc.

> -- Ah bon, il n’a pas de prénom ?

> -- Je viens de vous le dire Juste Leblanc... Votre prénom c’est François, c’est juste ? Eh bien lui c’est pareil, c’est Juste.

«Le dîner de cons», Pierre Brochant et François Pignon.

----
## Limites

- Utilisez `min` et `max` pour les limites 
- Supposez que vous souhaitez limiter à 24 le nombre d'articles dans un panier et que vous déclarez la constante suivante:

```ts
const tooManyCartItems: number = 24;
```

- Le problème ici c'est que l'on ne peut pas dire s'il s'agit une limite inclusive ou pas. 
- Est-ce que le panier peut avoir 24 articles ou pas?
- Un meilleur identifiant:

```ts
const maxNumberOfCartItems: number = 24;
```

- Ici, la limite est clairement inclusive.

----
## Intervalles

- Utilisez `first` et `last`, plutôt que `start`, `stop`, pour les intervalles inclusifs: 

![](resources/png/first-last.png)

----

- Parfois, il est utile d'utiliser des intervalles inclusifs/exclusifs
- Par exemple,  ils est plus simple d'écrire: 


```ts
todayEvents = eventsInRange("22/1/2018 00:00", "22/1/2018 24:00")
```

que 

```ts
todayEvents = eventsInRange("22/1/2018 00:00", "22/1/2018 23:59")
```

- Dans ces cas, utilisez `begin` et `end` pour les intervalles inclusifs/exclusifs: 

![](resources/png/begin-end.png)


----
## Booléens 

- Traditionnellement, les identifiants booléens sont précédés par «`is`», «`has`» ou «`need`» pour éviter l'ambiguïté. 
- Par exemple:
```ts
let readPassword: boolean = true;
```
- Est-ce que la variable dit que le mot de passe a été lu, ou qu'il doit être lu? 
- De meilleurs choix:
```ts
let isAuthenticated : boolean = true;
let needPassword : boolean = true;
```

----
## Plan
- Introduction
- Conventions de codage
- Nommage de variables et de fonctions
- Éviter des mauvaises interprétations
- Esthétique<!-- .element: class="fragment highlight-blue" -->
- Commentaires
- Simplification du flot de contrôle
- Conclusion

----
## Esthétique

- Un programme bien formaté est plus lisible qu'on programme mal formaté.

- p. ex. calcul du pgcd:

```ts
function pgcd(a,b)
{
	while (a!=b){
	if (a>b){ a-=b ;}
	else {b-=a;}
	}
	return a;
}
```

----

- La même fonction bien formatée:

```ts
// Calcul du plus grand commun diviseur de deux entiers
function pgcd(a: number, b: number) {
    while (a != b) {
        if (a > b) { 
            a = a - b; 
        }
        else { 
            b = b - a; 
        }
    }
    return a;
}
```

----
## Tabulations
Sans:
```ts
title = request.POST.get('title')
email = request.POST.get('email')
location = request.POST.get('location')
email = request.POST.get('email')
url = request.POST.get('url')
details = request.POST.get('details')
```
Avec:
```ts
title    = request.POST.get('title')
email    = request.POST.get('email')
location = request.POST.get('location')
email    = request.POST.get('email')
url      = request.POST.get('url')
details  = request.POST.get('details')
```

----
## Plan
- Introduction
- Conventions de codage
- Nommage de variables et de fonctions
- Éviter des mauvaises interprétations
- Esthétique
- Commentaires<!-- .element: class="fragment highlight-blue" -->
- Simplification du flot de contrôle
- Conclusion

----

<!-- .element: data-background-image="resources/png/comments.png" data-background-size="700px"-->


----
## Commentaires

- Un code bien commenté est plus lisible qu'un code sans commentaires.
- Mais **attention**: beaucoup commenter ≠ bien commenter
- Un code avec trop de commentaires inutiles est souvent plus difficile à lire qu'un code sans commentaires.

----

### Un mauvais commentaire paraphrase le code:

```ts
// Function declaration
function factorial(num: number): number {
    let factorial:number = 1; // Assigns 1 to factorial
    let i: number = num; // Assigns num to i

    while(i >= 1) {  // loops while i >= 1
        // assigns factorial with de product of factorial and i
        factorial = factorial * i; 
        i--; // decrements i
     }
     return factorial; // return factorial
}
```
(Tous les commentaires ci-dessus sont inutiles.)

----
## Quelques conseils

- Ne  commentez pas ce qui peut être déduit directement du code.
- Ne commentez pas juste pour commenter.
- Soyez précis! 
- Mettez-vous à la placer de la personne qui lira votre code:
  - Anticipez les questions probables
  - Annoncez les pièges 
  - Donnez une vision d'ensemble (résumé de l'algorithme)

----
## Ne commentez pas les mauvais identifiants
### Renommez-les !

```ts
// Total number of active threads for handling requets
const threads: number = 5
```

Un changement du nom de l'identifiant peut remplacer un commentaire:

```ts
const numberOfActiveThreads = 5
```

----
## Inclure les 
### «commentaires du réalisateur»

- Les «commentaires du réalisateur» sont des informations additionnelles dont seul le développeur dispose:

```ts
// I compared the performance several times using from 1 to 20 active 
// threads and find out that 5 active threads achieves the best 
// performance for 8 cores CPU.
const numberOfActiveThreads = 5;
```

```js
/*
after hours of consulting the tome of google
i have discovered that by the will of unknown forces
without the below line, IE7 believes that 6px = 12px
*/
font-size: 0px;
```

----

- Ce genre de commentaire peut aussi expliquer l'état du code:

```ts
// After adding new features for version 3.0 (November 2017), the
// code became fragile. Maybe we should split this function into
// two others, displayRaw() and displayHTML().
function display(){}
```

```ts
// 
// Dear maintainer:
// 
// Once you are done trying to 'optimize' this routine,
// and have realized what a terrible mistake that was,
// please increment the following counter as a warning
// to the next guy:
// 
// total_hours_wasted_here = 42
// 
```


----
## Commentez les failles du code

Quelques commentaires spéciaux:

Commentaire | Description
--|--
XXX | Mauvais code, mais qui fonctionne
FIXME | Mauvais code, qui ne fonctionne pas
TODO | A faire
HACK | Code réservé aux spécialistes

----
## Commentaires internes et externes

- Les commentaires externes à une fonction s'adressent aux utilisateurs.
- Les commentaires internes s'adressent aux autres développeurs.

```ts
// Calculates the factorial of a number.
function factorial(num: number): number {
    let factorial:number = 1; 
    let i: number = num; 
    
    // A loop has better performance than recursive calls.
    while(i >= 1) { 
        factorial = factorial * i; 
        i--; 
     }
     return factorial;
}
```

----
## Plan
- Introduction
- Conventions de codage
- Nommage de variables et de fonctions
- Éviter des mauvaises interprétations
- Esthétique
- Commentaires
- Simplification du flot de contrôle<!-- .element: class="fragment highlight-blue" -->
- Conclusion

----

## Simplification du flot de contrôle

----
## Expressions booléennes

- L'ordre de lecture d'une expression est importante:
```ts
if (length > 10)
```
est plus simple à lire que:
```ts
if (10 < length)
```

----
## Opérateur ternaire

- TypeScript propose un opérateur ternaire (conditionnel en une seule ligne).
- Syntaxe: `cond ? a : b` (si condition alors a, sinon b)
- Dans certains cas, le code est lisible et compact:

```ts
timeString = (hour > 12) ? "pm" : "am"; 
```

- Mais dans la plupart des cas, le code devient plus complexe:

```ts
let isLeapYear = ((year % 400) == 0) ? 1 :
                          (((year % 100) == 0)? 0 :
                          (((year % 4) == 0)  ? 1 :
                            0));
```

----
## Variables explicatives

- L'introduction de variables auxiliaires explicatives permettent d'améliorer la lisibilité d'une expression complexe.
- Ces variables sont souvent plus utiles que les commentaires.

----
```
float _x = abs(x - deviceInfo->position.x) / scale;
int directionCode;
if (0 < _x && x != deviceInfo->position.x) {
  if (0 > x - deviceInfo->position.x) {
    directionCode = 0x04 /*left*/;
  } else if (0 < x - deviceInfo->position.x) {
    directionCode = 0x02 /*right*/;
  }
}
```

- Le même code, sans commentaires, mais avec des variables explicatives:

```
static const int DIRECTIONCODE_RIGHT = 0x02;
static const int DIRECTIONCODE_LEFT = 0x04;
static const int DIRECTIONCODE_NONE = 0x00;

int oldX = deviceInfo->position.x;
int directionCode
  = (x > oldX)? DIRECTIONCODE_RIGHT
  : (x < oldX)? DIRECTIONCODE_LEFT
  : DIRECTIONCODE_NONE;
```

[Does Bad Writing Reflect Poor Programming Skills?](http://sd.jtimothyking.com/2006/12/15/does-bad-writing-reflect-poor-programming-skills/)

----
## Retour anticipé d'erreurs

- Souvent, il est recommandé de n'avoir qu'une instruction de retour dans une fonction.
- Dans certains cas, comme dans la vérification des paramètres, le retour anticipé simplifie la lecture:

```ts
function contains(str: string , substr: string ): boolean {
    if (str == null || substr == null) return false;
    if (substr === "") return true;

    // (...)
}
```

----
## Conditionnels

- Utilisez les expressions positives plutôt que les négatives. 
- Préférez:

```ts
if (a == b) {
    // Cas 1
} else {
    // Cas 2
}
```

à: 

```ts
if (a != b) {
    // Cas 2
} else {
    // Cas 1
}
```

----

Remplacez:
```ts
if (<booleanExpression>) {
    return true;
} else {
    return false;
}
```
Par:
```ts
return <booleanExpression>;
```

----
Par exemple, remplacez: 
```ts
if (a > b) {
    return true;
} else {
    return false;
}
```

Par:

```ts
return (a > b);
```

----
## Plan
- Introduction
- Conventions de codage
- Nommage de variables et de fonctions
- Éviter des mauvaises interprétations
- Esthétique
- Commentaires
- Simplification du flot de contrôle
- Conclusion<!-- .element: class="fragment highlight-blue" -->

----
## L'intention, la raison et la manière

- Les commentaires externes doivent expliquer ce que fait une fonction (l'intention).
- Les commentaires internes doivent expliquer pourquoi le code a été écrit comme ça (la raison).
- Le code source doit être assez clair pour expliquer comment il s'exécute (la manière).

----
## Conclusion

- La lisibilité du code a un impact important sur la maintenabilité d'un logiciel.
- La lisibilité ne concerne pas seulement la qualité des commentaires:
   - le choix des identifiants et la simplicité du flot de contrôle sont tout aussi importants.



----
> «Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.» Douglas Knuth, [Essay on Literate Programming](http://www.literateprogramming.com/knuthweb.pdf).



    
    
    

