# Développement logiciel

----


> On appelle «Développement logiciel» le processus de création et maintenance d'un logiciel. 

> Dans un sens plus large, il inclut tout ce qui est impliqué entre la conception du logiciel désiré jusqu'au produit logiciel, en respectant un processus planifié et structuré.

----

> Le développement de logiciels peut inclure la recherche, le développement, le test, le prototypage, la modification, la réutilisation, la réingénierie, la maintenance, ou toute autre activité qui résulte en un produit logiciel.

----

> Le besoin d'un meilleur contrôle de qualité du processus de développement a engendré, dans les années 70, la discipline appelée «Génie Logiciel».

----

## Plan
- Les acteurs du développement logiciel
- Environnement de travail du développeur
- Conclusion


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
    Back in the late '50's and early '60's, programmers didn't even interact directly with computing devices. They delivered their programs by hand to technicians and then picked up the results hours later after the programs were batch processed with many others. Thus early tasks were typically geared towards mathematical computation, which required a very limited feedback loop.

----

![](resources/puchcard.jpg)
<!-- .element style="width:400px;" -->

- Thèse: développer des logiciels c'est comme développer le matériel électornique.
- Il n'y avait pratiquement aucune interaction entre le programmeur et l'ordinateur.

----

## Années 60

![](resources/png/1960.png)

- Langages: COBOL, Simula, PL/I

note:
On parle désormais de "Utilisateur" et de "Développeur". Les ordinateurs ne sont plus réservés aux calculs scientifiques!

----

<div>
- Antithèse: élaboration des logiciels.
- Début de la programmation structurée.
- Les utilisateurs ne sont plus seulement les scientifiques.
</div>
<!-- .element style="position:absolute; left:00px;  width:400px; top:200px;" -->

<figure style="position:absolute; right:00px;  width:400px; top:200px;"><img src='resources/png/structured-programming.png'>
	<figcaption></figcaption></figure>

----

## Années 70

![](resources/png/1970.png)

- Langages: Pascal, C, Prolog, Smalltalk, Modula, BASIC, etc.

note:

Nouveaux rôles:

- Analyste et Concepteur
- Testeur

----

![](resources/png/anniversary.png)
<!-- .element style="width:400px;" -->

- C'est la «crise du logiciel»!
- Naissance du «Génie Logiciel», créé en 1968 à l'OTAN.

----

## Années 80

![](resources/png/1980.png)

- Langages: ADA, Objective C, Eiffel, Perl, etc.

note:

Nouveaux rôles:

- ingénieur des exigences
- fournisseur d'outils
- IHM

----

![Lisa GUI](resources/png/lisa-gui.png)

- Création du premier Macintosh en 1984: début des ordinateurs personnels.
- Création de la «Free Software Fondation» en 1985.
- Nouveaux acteurs: Fournisseur d'outils (création des AGL), développeur IHM

![FSF](resources/png/fsf.png)
<!-- .element style="width:100px; position:fixed; right:00px; top:10px" -->

----

## Années 90 

![1990](resources/png/1990.png)
<!-- .element style="width:700px;" -->

- Langages: Python, Haskell, OCaml, Lua, Java, PHP, Ruby, JavaScript, etc.

note:

Nouveaux rôles:

- Intergiciels
- Composants
- Architect

----

![WWW](resources/png/www.png)
<!-- .element style="width:100px;" -->

- Début du «World Wide Web».

![Maintenance](resources/png/software-maintenance.png)
<!-- .element style="width:100px;" -->

- La maintenance commence à devenir plus importante que le développement.

----
## Années 2000

![](resources/png/2000.png)
<!-- .element style="width:700px;" -->

- Langages: C#, Scala, Groovy, Go, etc.

note:

- Développeur web
- Développeur logiciels libre

----

- Création de Facebook et des réseaux sociaux.
- Le logiciel libre devient indispensable. 
  - Plusieurs entreprises ouvrent leur code: Apple, Google, Microsoft, Facebook, etc.
- Début des «méthodes agiles». 

----
## Années 10

![](resources/png/2010.png)<!-- .element: style="width:800px;"-->

- Langages: Rust, Dart, Kotlin, Swift, TypeScript, etc.

note:

- DevOps
- Applications mobiles
- Cloud

----

- Démocratisation des _smartphones_ et des tablettes.
- Nouvelles architectures: _cloud_, _fog_, _edge_, etc.
- Démocratisation des objets connectés: le logiciel est partout.
- Vers une «crise du logiciel» 2.0 ? 

----

## Plan

- Les acteurs du développement logiciel
- **Environnement de travail du développeur**
- Conclusion

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

![](resources/png/evaluateur-qualite.png)<!-- .element: style="width:500px;"-->

- One peut coupler le gestionnaire de versions avec un évaluateur de qualité du code source.

----

- L'évaluateur de qualité peut, en continu:
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

![](resources/png/developpeur-web.png)
<!-- .element: style="width:300px;"-->

- Enfin, les développeurs utilisent souvent des sites web spécialisés pour poser des questions, obtenir des exemples de code, apprendre de nouvelles techniques, etc.
- Exemples: [StackOverflow](https://stackoverflow.com), [Code Project](https://www.codeproject.com/), [Développez.com](https://www.developpez.com).

note:
-Stack overflow: https://stackoverflow.com

----
## Exemple: Developpez.com

<iframe class="stretch" data-src="https://www.developpez.com"></iframe>

----

## Plan

- Les acteurs du développement logiciel
- Environnement de travail du développeur
- Conclusion


----

## Conclusion

- Le développement logiciel comprend plusieurs activités au-delà du simple codage: maintenance, prototypage, maintenance, test, etc.
- C'est une activité très outillée et automatisée.
- Beaucoup d'acteurs différents (et tout autant de métiers). 
