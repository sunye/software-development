## Test logiciel

----

## Plan

- Introduction<!-- .element: class="fragment highlight-blue" -->
- Différents types de test
- Test unitaire
- Test unitaire avec Jasmine
- Conclusion

----

## Introduction

----
### Test logiciel

> «Processus d'analyse d'un logiciel pour détecter des différences entre les conditions existantes et exigées (c'est à dire, un bug) et d'évaluer les propriétés du logiciel»

<figure><img src='resources/bug.jpg'><figcaption>ISO/IEC/IEEE 29119 Software Testing</figcaption></figure>

----

### Fiabilité

> «Capacité d’un produit logiciel à effectuer les fonctions requises dans les conditions spécifiées pour des périodes de temps spécifiées, ou pour un nombre spécifique d’opérations» [ISO 9126]



----

**Vérification**: le logiciel doit être conforme à sa spécification.

>«— Construisons-nous le produit correctement?»

<div style="position:absolute; left:0px;  width:300px;font-size: 24pt;">
![](resources/monopoly.jpg)
</div>
<p style="position:absolute; left:400px; " align="left">
	“— Je suis tombé sur la case «Départ», mais je n’ai pas reçu mes $200”
</p>

----

**Validation**: le logiciel doit remplir les exigences de l’utilisateur.

> «— Construisons-nous le bon produit?»

<div style="position:absolute; left:0px;  width:300px;font-size: 24pt;">
![](resources/game-of-life.jpg)
</div>
<p style="position:absolute; left:400px; " align="left">
	“— Ce jeu contient bien des cases, des joueurs et une case «Départ», mais ce n’est pas le jeu que je voulais.
</p>

----

## Vérifier pour prévenir des erreurs

- Une *erreur* est une décision inappropriée ou erronée, faite par un développeur, qui conduit à l'introduction d'un défaut.

----

- Un *défaut* est une imperfection dans un des aspects du système qui contribue, ou peut potentiellement contribuer, à la survenance d'une ou de plusieurs défaillances
  - Parfois, il faut plusieurs défauts pour causer une défaillance.

----

- Une *défaillance* est un comportement inacceptable présenté par un système. 
  - La fréquence des défaillances reflète la fiabilité.

----

## Types d’erreurs

- Erreur de code.
- Erreur de processus.
- Erreur de documentation.
- Erreur de données.

----

## Causes principales d’erreurs

- Mauvaise spécification des exigences logicielles: erronées, incomplètes, inconsistantes.
- Erreurs de conception: mauvais choix de conception
- Erreurs de mise en œuvre: erreurs d'opérateurs, oublis, expressions incorrectes.
- Outils inadaptés ou fragiles: langages de programmation, compilateurs, bibliothèques, outils de développement.

----

- Lacunes dans le processus de test: tests incomplets, vérification inadéquates, erreurs de déboggage.
- Erreurs d'évolution: maintenance peu soignée, ajout de nouvelles erreurs, complexité progressive. 
- Écarts délibérés des exigences.
- Non-respect des règles de codage et de documentation.


----

## Zune bug (2008)
<div style="position:absolute; left:0px;  width:400px;font-size: 24pt;" align="left">
<ul>
<li> Le 31 décembre 2008, tous les dispositifs Zune se sont arrêtés.
<li> Cause: une boucle infinie dans la gestion d’années bissextiles.
<li> Solution: attendre le lendemain.
</ul>
</div>
<figure style="position:absolute; left:500px;  width:400px;"><img src='resources/zune.jpg'>
</figure>

----

```c
 year = ORIGINYEAR;
    while (days > 365)
    {
        if (IsLeapYear(year))
        {
            if (days > 366)
            {
                days -= 366;
                year += 1;
            }
        }
        else
        {
            days -= 365;
            year += 1;
        }
    }
```

----

## Plan

- Introduction
- Différents types de test<!-- .element: class="fragment highlight-blue" -->
- Test unitaire
- Test unitaire avec Jasmine
- Conclusion


----

## Classement des tests

Différents critères:

1. Le facteur de qualité testée: 
  - fonctionnel, performance, etc.
1. L’échelle:
  - unitaire, intégration, système, etc.
1. La phase de développement:  
  - non-régression, acceptation, etc.
1. Le type d’exécution: 
  - dynamique, statique.
1. La génération des données de test: 
  - fonctionnel, structurel

----

## Classement
### Selon facteur de qualité testé

----

## Facteur de qualité testé
- Fonctionnalité
- Sécurité,  intégrité
- Utilisabilité
- Cohérence 
- Maintenabilité 
- Efficacité 
- Robustesse 
- Sûreté de fonctionnement
- Performance (charge, passage à l’échelle, stress)
- Portabilité
- Etc.

----

## Classement
### Selon l'échelle

----

## Types de test selon l’échelle

- Unitaire
  - Test individuel d’une unité: composant, classe, procédure/fonction.
- Intégration
  - Choix d’un ordre pour intégrer et tester les différentes unités du système
- Système
  - Test de la globalité du système
  - Des fonctions offertes, à partir de l’interface

----

## Test unitaire

- Vérification d’une unité indépendamment des autres
- Vérifier intensivement les fonctions unitaires 

![](resources/png/unit.png)<!-- .element: style="width:300px;" -->

----

## Test unitaire

- Pour un langage procédural: unité de test = procédure

```ts
function isLeapYear(year: number): boolean {
    if (year % 400 == 0 && year % 100 == 0) {
        return true;
    }

    if (year % 100 == 0) {
        return false;
    }

    return (year % 4 == 0);
}
```

----
## Test d’intégration


- Étape du test logiciel pendant laquelle les unités sont réunies et testés comme un groupe.
- Elle se passe après le test unitaire et avant le test système. 
- L'objectif du test d'intégration est de tester les interactions entre les unités.


![](resources/png/integration.png)<!-- .element: style="width:300px;" -->


----
## Test système

- Test d'un système intégré pour vérifier s'il répond aux exigences spécifiées.

![](resources/png/systeme.png)<!-- .element: style="width:300px;" -->

----


## Classement
### Selon la phase de développement

----
## Types de test selon l’étape du cycle de vie logiciel

- Alpha
- Smoke
- Nouvelle fonctionnalité
- Non régression
- Acceptation
- Beta

note:
smoke testing (also confidence testing, sanity testing[1][2]) is preliminary testing to reveal simple failures severe enough to (for example) reject a prospective software release.

----

## Test de non régression

- Consiste à vérifier que des modifications apportées au logiciel n’ont pas introduit de nouvelle erreur
  - vérifier que ce qui marchait marche encore
- Dans la phase de maintenance du logiciel
- Après refactoring, ajout/suppression de fonctionnalités
- Après la correction d’une faute

----


## Classement
### Selon le type d'exécution

----

## Type d’exécution

- Test statique
  - relecture / revue de code
  - analyse automatique
  - vérification de propriétés, règles de codage...

- Test dynamique
  - on exécute le programme avec des données en entrée et on observe le comportement

----

### Processus du test dynamique

![](resources/png/test-dynamique.png)

----

### Données du test dynamique
- Données de test en entrée du programme sous test
- Données de sortie produites par le programme
- Verdict

----

### Activités du test dynamique
- Création des données de test
  - Génération
  - Qualification
- Oracle
  - Analyse des données de sortie
  - Confrontation avec la spécification
- Critère de test
  - A-t-on assez testé ?
- Localisation/correction des erreurs

note:
	Oracle
	Entre l'activité et la donnée
	Ça peut être une donnée attendue mais il a bien fallut la produire
	Appliquer un oracle n'est pas aisé


----

## Classement
### Selon la génération des données de test

----

## Génération des données de test

- Test fonctionnel (test boîte noire)
  - Utilise la description des fonctionnalités du programme
![](resources/png/boite-noire.png)<!-- .element: style="width:300px;" -->
- Test structurel (test boîte blanche)
  - Utilise la structure interne du programme
![](resources/png/boite-blanche.png)<!-- .element: style="width:300px;" -->

----

## Test fonctionnel

```ts
function isLeapYear(year: number): boolean {
```

- Données de test:
  - Années bissextiles: 1972, 2000, 2008
  - Années non-bissextiles: 2017, 1999, 1969

----

## Test structurel

- A partir d’un modèle du code
  - modèle de contrôle (conditionnelles, boucles...)
  - modèle de données
  - modèle de flot de données (définition, utilisation...)
- Utilisation importante des parcours de graphes
  - critères basés sur la couverture du code

----

## Test structurel

```ts
function isLeapYear(year: number): boolean {
    if (year % 400 == 0 && year % 100 == 0) {
        return true;
    }

    if (year % 100 == 0) {
        return false;
    }

    return (year % 4 == 0);
}
```

- Données de test:
  - Premier conditionnel: 2000
  - Deuxième conditionnel: 2100
  - Dernière instruction: 2004


----

## Plan

- Introduction
- Différents types de test
- Test unitaire<!-- .element: class="fragment highlight-blue" -->
- Test unitaire avec Jasmine
- Conclusion

----

## Test unitaire
### Fonctionnel et dynamique

----

## Objectifs

- Vérifier que chaque unité fonctionne comme conçue.
- Isoler chaque partie d'un logiciel et montrer qu'elles sont correctes.

----

## Postulat

>«Une fonction sans test unitaire ne fonctionne pas»

----

## Conséquences des tests unitaires

- Évitent les `print()` intempestifs
- Accélèrent le développement 
- Évitent le déboggage
- Simplifient et améliorent la conception

----

- Documentation "vivante" du logiciel
- Spécifient le comportement attendu
- Réduisent les coûts futurs. 

note:
les tests sont la documentation vivante du logiciel

----

- Simplifient l'évolution
  - Évitent la régression
  - Les tests servent de «filet de sécurité» aux modifications
- Simplifient l'intégration
  - Si on fait confiance à chaque unité, les erreurs d'intégration sont plus simples à trouver

----

## Propriétés testées

- Comportement fonctionnel
- Gestion d'erreurs
- Vérification des valeurs d'entrée (paramètres)
- Correction des valeurs de sortie (valeur de retour)
- Performance

----

## Caractéristiques d'un bon test unitaire

- Isolable
- Reproductible
- Automatisable
- Simple

note:
simple: plus simple à localiser et corriger des erreurs

----

## Exemple

```ts
function isLeapYear(year: number): boolean
```
- Spécification:
  - Cette fonction retourne vrai si l'entier passé en paramètre est une année bissextile.
  - Seulement valable pour les années >= 1900
- Test unitaires:
  - Année invalide
  - Une ou plusieurs années bissextiles: 2004, 1996, 2020
  - Une ou plusieurs années non-bissextiles: (1997, 2017)

----

## Plan

- Introduction
- Différents types de test
- Test unitaire
- Test unitaire avec Jasmine<!-- .element: class="fragment highlight-blue" -->
- Conclusion

----

## Jasmine

- Outil de test unitaire pour Javascript et TypeScript.
- Syntaxe simple et expressive:

```ts
describe("My hello world function", () => { 
  it("should return 'Hello, World!'", () => {
      expect(helloWorld()).toBe("Hello, World!");
    });
});
```

----

Une suite de tests:

```ts
describe("User Validation", () => {
  it("requires a name", () => { 
    //test content 
  }) 
  it("does not validate invalid names", () => { 
    //test content 
  })
});

```

----

## Plan

- Introduction
- Différents types de test
- Test unitaire
- Test unitaire avec Jasmine
- Conclusion<!-- .element: class="fragment highlight-blue" -->

----

> «If debugging is the process of removing bugs, then programming must be the process of putting them in» 
[Edsger W. Dijkstra]

----

## Conclusion

- Il est impossible de tester complètement un logiciel
- Les tests ne peuvent pas démontrer l'absence d'erreurs
- Le logiciel évolue continuellement: les tests ne sont pas toujours valides

----

> « There’s always one more bug» 
[Lubarsky’s Law of Cybernetic Entomology] 

