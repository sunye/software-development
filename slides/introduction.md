# Développement logiciel

----


> On appelle «Développement logiciel» le processus de création et maintenance d'un logiciel. 

> Dans un sens plus large, il inclut tout ce qui est impliqué entre la conception du logiciel désiré jusqu'au produit logiciel, en respectant un processus planifié et structuré.

----

> Le développement de logiciels peut inclure la recherche, le développement, le test, le prototypage, la modification, la réutilisation, la réingénierie, la maintenance, ou toute autre activité qui résulte en un produit logiciel.

----

> Le besoin d'un meilleur contrôle de qualité du processus de développement a engendré, dans les années 70, la discipline appelé «Génie Logiciel».

----

## Plan
- Les acteurs du développement logiciel


----

## Les acteurs du développement logiciel

### Un peu d'histoire...

----

## 1940-50

![](resources/png/1940.png)

- Langages: ENIAC Short Code, ARC Assembly, etc.

----

## Années 50

![](resources/png/1950.png)

- Langages: Fortran, LISP, ALGOL, etc.

note:
    Thèse: développer des logiciels c'est comme développer le matériel.
    Back in the late '50's and early '60's, programmers didn't even interact directly with computing devices. They delivered their programs by hand to technicians and then picked up the results hours later after the programs were batch processed with many others. Thus early tasks were typically geared towards mathematical computation, which required a very limited feedback loop.

----

## Années 60

![](resources/png/1960.png)

- Langages: COBOL, Simula, PL/I

note:
    Antithèse: élaboration des logiciels.
    On parle désormais de "Utilisateur" et de "Développeur". Les ordinateurs ne sont plus réservés aux calculs scientifiques!
    Début de la programmation structurée. 
    1968 - l'OTAN créé une nouvelle discipline, le «Génie Logiciel»

----

## Années 70

![](resources/png/1970.png)

- Langages: Pascal, C, Prolog, Smalltalk, Modula, BASIC, etc.

note:
    Crise du logiciel, naissance du "Génie Logiciel"

----

## Années 80

![](resources/png/1980.png)

- Langages: ADA, Objective C, Eiffel, Perl, etc.

note:
- Création de la «Free Software Fondation» en 1985.
- Nouveaux acteurs: Fournisseur d'outils (création des AGL), développeur IHM

----
## Années 90 

![](resources/png/1990.png)
- Langages: Python, Haskell, OCaml, Lua, Java, PHP, Ruby, JavaScript, etc.

----
## Années 2000

![](resources/png/2000.png)

- Langages: C#, Scala, Groovy, Go, etc.

----
## Années 10

![](resources/png/2010.png)<!-- .element: style="width:800px;"-->

- Langages: Rust, Dart, Kotlin, Swift, TypeScript, etc.

----
## Plan

----
## Environnement de travail du développeur

----
## IDE

![](resources/png/developpeur-ide.png)<!-- .element: style="width:600px;"-->

- Habituellement, les développeurs utilisent un Environnement de Développement Intégré (IDE), adapté à un langage de programmation ou à une plateforme cible.
- Avantages: Auto-complétion, débogueur, réorganisation et mise en forme du code, navigation à l'intérieur du code.<!-- .element: class="fragment" -->

----
## Développement collaboratif

<div style="position:absolute; left:0px;  width:500px;top:200px;" align="left">
<ul>
		<li>Souvent, plusieurs développeurs travaillent sur un même projet. 
        <li>Dans ce cas, chaque développeur garde une copie du projet localement sur son ordinateur.
</ul>
</div>

<figure style="position:absolute; right:00px;  width:400px; top:200px;"><img src='resources/png/developpeurs-multiples.png'>
	<figcaption></figcaption></figure>



----
## Gestionnaire de versions

![](resources/png/vcs.png)<!-- .element: style=" width:600px;"-->
- Le gestionnaire de versions garde l'historique du code source et gère l'intégration des modifications des développeurs. 

----
## Évaluation continue de la qualité 

![](resources/png/evaluateur-qualite.png)<!-- .element: style="width:600px;"-->

- One peut coupler le gestionnaire de versions avec un évaluateur de qualité du code source.

----

- L'évaluateur de qualité qui pourra, en continu:
  - identifier le code dupliqué;
  - mesurer le niveau de documentation;
  - vérifier le respect des règles de programmation;
  - détecter des bugs;
  - évaluer la qualité des tests.

note:
- Exemple: SonarQube

----
## Exemple: SonarQube

<iframe class= "stretch" data-src="https://www.sonarqube.org"></iframe>

----
## Web

![](resources/png/developpeur-web.png)<!-- .element: style="width:400px;"-->

- Enfin, les développeurs utilisent souvent des sites web spécialisés pour poser des questions, obtenir des exemples de code, apprendre de nouvelles techniques, etc.
- Exemples: [StackOverflow](https://stackoverflow.com), [Code Project](https://www.codeproject.com/), [Développez.com](https://www.developpez.com).

note:
-Stack overflow

----
## Exemple: Developpez.com

<iframe class="stretch" data-src="https://www.developpez.com"></iframe>

----

## Plan

----

## Conclusion
