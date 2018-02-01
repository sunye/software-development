## Gestion de versions


----
## Plan

- Introduction<!-- .element: class="fragment highlight-blue" -->
- Motivation
- Principes de base
- Versions
- Collaboration
- Forges
- Conclusion

----
## Introduction

- La gestion de version est un élément indispensable dans le développement logiciel.
- Objectifs principaux:
  - Historiser toutes les versions d'un projet (pour revenir éventuellement à un état antérieur en cas de problème)
  - Gérer:
    - plusieurs versions concurrentes d'un même projet
    - plusieurs variantes d'un même projet avec maintenance en parallèle
    - plusieurs développeurs sur le même projet

----

- Un projet logiciel est généralement subdivisé en plusieurs composantes avec des inter-dépendances
- Le développement est un processus itératif et collaboratif:
  - itératif : plusieurs versions successives
  - collaboratif : plusieurs versions concurrentes

----
## Gestionnaire de versions

- C'est un logiciel  (un serveur).
- Il permet de conserver l'intégralité des versions fichiers d'un projet.
- Il permet de connaître toute l'historique des modifications. 
- Il est généralement constitué:
  - d'un référentiel (local ou distant) : contenant toutes les versions;
  - de copies de travail : contenant les modifications d'un utilisateur qui seront ensuite incluses dans le référentiel.

----
### Quelques exemples

- **Git**
- Mercurial
- Subversion (SVN)
- Control Version System (CVS)

----
## Plan

- Introduction
- Motivation<!-- .element: class="fragment highlight-blue" -->
- Principes de base
- Versions
- Collaboration
- Forges
- Conclusion

----

## Motivation

Supposez que Bob est en train de préparer un rapport. 

```sh
drwxr-xr-x   4 sunye  staff  136 Jan 30 13:53 .
drwxr-xr-x  22 sunye  staff  748 Jan 30 13:53 ..
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.bak
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.doc
```
Comme Bob est  consciencieux, il a  aussi créé une sauvegarde de son rapport.


----

Comme Bob n'est pas très fort en orthographe, il envoie ensuite son rapport pour que son amie Anna le corrige.

```sh
drwxr-xr-x   6 sunye  staff  204 Jan 30 13:55 .
drwxr-xr-x  22 sunye  staff  748 Jan 30 13:53 ..
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.bak
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 13:55 rapport_v1.doc
```

Et pour se rappeler quel texte exactement il a envoyé, il crée une copie appelée `rapport_v1`.

----

Pendant qu'Anna le corrige, Bob continue à travailler sur son rapport et décide de l'envoyer à Carol, pour avoir son avis.

```sh
drwxr-xr-x   6 sunye  staff  204 Jan 30 13:55 .
drwxr-xr-x  22 sunye  staff  748 Jan 30 13:53 ..
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.bak
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 13:55 rapport_v1.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 13:55 rapport_v2.doc
```

Il fait une copie de sont rapport avant de l'envoyer, il l'appelle `rapport_v2.doc`.

----

Bob continue à travailler sur son rapport et est prêt à envoyer son rapport, 
qu'il prend soin de faire une copie, appelée `rapport_v3.doc`. 

```sh
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.bak
-rw-r--r--   1 sunye  staff    0 Jan 30 13:53 rapport.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 13:55 rapport_v1.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 14:05 rapport_v1_commentaires_anna.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 13:55 rapport_v2.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 14:06 rapport_v2_commentaires_carol.doc
-rw-r--r--   1 sunye  staff    0 Jan 30 14:06 rapport_v3.doc

```

Avant d'envoyer son rapport, il reçoit les commentaires d'Anna et de Carol. 

----
## La question de Bob

Maintenant, Bob doit:

- Intégrer les commentaires et les modifications de Carol faites sur une version plus ancienne.
- Intégrer les commentaires et les modifications d'Anna, faites sur une version encore plus ancienne.

Et Bob se pose une question:

> «- Il n'y a pas un moyen plus simple ? » 

----
## Plan

- Introduction
- Motivation
- Principes de base<!-- .element: class="fragment highlight-blue" -->
- Versions
- Collaboration
- Forges
- Conclusion

----
## Gestion de versions
### Principes de base

- La gestion de version se base sur les notions de `diff` et `patch`.
- Un `diff` correspond à la différence entre deux documents.
- Un `patch` correspond à l'ensemble de modifications qu'on doit réaliser sur un document pour obtenir un autre.

----

### `Diff` et `Patch`

![](resources/png/diff-patch.png)<!-- .element: style="width: 400px;" -->


----
### Comparaison de fichiers avec `diff`

Supposez que vous souhaitez comparer 2 fichiers

```sh
Abricot
Airelle
Alkékenge
Amande
Amélanche
Ananas
Asimine
Avocat
Banane
Bergamote
Bigarade ou Chinois
Brugnon
Canneberge
Cassis
Cerise
Châtaigne
Citron
Clémentine
Coing
Cornouiller du Canada
Cynorrhodon
Datte
Épine-vinette
Feijoa
Figue
Figue de barbarie
Fraise
Grenade
Griotte
Groseille
Jujube
Kaki
Kiwaï
Kiwi
Lime
Mandarine
Marron
Melon
Mirabelle
Mûre
Myrte
Myrtille
Nèfle
Nèfle du Japon
Noisette
Noix
Olive
Orange
Pamplemousse
Pastèque
Pêche
Physalis ou Coqueret du Pérou
Pistache
Plaquebière ou Chicouté
Poire
Pomme
Pomélos
Prune et Pruneau
Quetsche
Raisin (voir vigne)
```
<!-- .element: style="position:absolute; width: 400px; left: 20px; top:200px;" -->


```sh
Abricot
Airelle
Alkékenge
Amande
Amélanche
Ananas
Arbouse
Asimine
Avocat
Banane
Bergamote
Bigarade ou Chinois
Brugnon
Canneberge
Cassis
Cerise
Châtaigne
Citron
Clémentine
Coing
Cornouiller du Canada
Cynorrhodon
Datte
Épine-vinette
Feijoa
Figue
Figue de barbarie
Fraise
Framboise
Grenade
Griotte
Groseille
Jujube
Kaki
Kiwi
Lime
Mandarine
Marron
Melon
Mirabelle
Mûre
Myrte
Myrtille
Nèfle
Nèfle du Japon
Noisette
Noix
Olive
Orange
Pamplemousse
Pêche
Physalis ou Coqueret du Pérou
Pistache
Plaquebière ou Chicouté
Poire
Pomme
Pomélos
Prune et Pruneau
Quetsche
Raisin (voir vigne)
```
<!-- .element: style="position:absolute; width: 400px; right:20px; top:200px; " -->

----

### Comparaison entre  `list1.txt` et `list2.txt`

```sh
Macaw:rapport sunye$ diff list1.txt list2.txt 
6a7
> Arbouse
27a29
> Framboise
33d34
< Kiwaï
50d50
< Pastèque
```

La différence entre deux fichiers s'appelle un `patch`.


----
## Plan
- Introduction
- Motivation
- Principes de base
- Versions<!-- .element: class="fragment highlight-blue" -->
- Collaboration
- Forges
- Conclusion

----

## Versions

- La gestion de version organise les documents comme un graphe orienté.
- Chaque version est en réalité un diff par rapport à la version précédente.

<!-- .element: style="position:relative; width: 500px; left:-300px; top:0px;" -->

![](resources/png/versions.png)<!-- .element: style="position:absolute; width:500px; right:-200px; top:0px;" -->

----
##  Copie de travail et référentiel

- Chaque développeur a une copie de travail où il peut modifier ses fichiers.
- Les développeurs ne peuvent pas modifier directement le référentiel.
- Alors, comment fait Bob pour créer des versions? <!-- .element: class="fragment" -->

<!-- .element: style="position:relative; width: 500px; left:-300px; top:0px;" -->

![](resources/png/workcopy.png) <!-- .element: style="position:relative; width:500px; right:-300px; top:-400px;" -->

----
## Validation

- Action d'envoyer des modifications locales vers le référentiel central.
- Dans le jargon de la gestion de versions on appelle cela un «commit».


----

![](resources/png/commit0.png) <!-- .element: style="width:600px; " -->

Bob crée un fichier et le **valide**.

```sh
git commit
```

----


![](resources/png/commit1.png)<!-- .element: style="width:600px; " -->

Bob modifie son fichier et le valide à nouveau.

```sh
git commit
```

----

![](resources/png/commit2.png)<!-- .element: style="width:600px; " -->

Et encore!

----
## Commentaires

- Chaque validation est accompagnée d'un commentaire.
- Les commentaires permettent de comprendre les modifications.

```sh
git commit rapport.doc -m "Prise en compte des commentaires de Carol"

git commit Main.ts -m "Bug 1143 resolution"
```


----
## Historique des validations

- Il est possible de connaître l'historique des validation de chaque fichier.
- L'historique permet de connaître rapidement l'auteur de chaque validation, la date et l'heure du changement ainsi que le commentaire associé à cette validation.
- Il est aussi possible connaître les modifications dans les détails.

----

- Supposez que Bob a validé plusieurs fois le fichier `rapport.doc`:

```sh
git commit  -m "Première version"
git commit  -m "Commentaires de Anna"
git commit  -m "Commentaires de Carol"
git commit  -m "Version envoyée"
```

----
- L'historique du fichier:

```sh
Macaw:rapport bob$ git log rapport.doc 
commit 128faba4e961a425962e59b8b0680c442528ed72 (HEAD -> master)
Author: Bob <bob@bob.net>
Date:   Wed Jan 31 10:24:19 2018 +0100

    Version envoyée

commit 67ef417b9453f62875780a49d009d4a5215af060
Author: Bob <bob@bob.net>
Date:   Wed Jan 31 10:23:39 2018 +0100

    Commentaires de Carol

commit a06254b8278deca2923597da8ea900d714d3870a
Author: Bob <bob@bob.net>
Date:   Wed Jan 31 10:22:55 2018 +0100

    Commentaires de Anna

commit dc0173a93752c37e20c4b87d9023a51b1d008949
Author: Bob <bob@bob.net>
Date:   Wed Jan 31 10:22:06 2018 +0100

    Première version
```




----
## La «scène»

- Tous les fichiers ne sont pas envoyés au référentiel.
- Un fichier doit «monter sur scène» pour être pris en compte par le gestionnaire de versions.

![](resources/png/scene.png)

----

- La scène est tout simplement un sous-ensemble des fichiers de la copie de travail.

![](resources/png/stage.png)<!-- .element: style="width:600px; " -->

- Dans le jargon de la gestion de versions on appelle cela un «stage».

----
## Retour en arrière

- Les validations peuvent être annulées: la copie locale revient à une version précédente. 
- Le retour en arrière n'est pas vraiment une annulation:
  - il est enregistré comme une nouvelle validation.
- On appelle cela un «revert».

----

Bob revient à la version `C1`.

![](resources/png/revert.png)<!-- .element: style="width:600px; " -->


----
## Plan

- Introduction
- Motivation
- Principes de base
- Versions
- Collaboration<!-- .element: class="fragment highlight-blue" -->
- Forges
- Conclusion

----
## Collaboration

- Essayons de compliquer un peu les choses! 

![](resources/png/math-formula.png)


----

- Supposez que Anna et Carol souhaitent collaborer avec Bob.
- Dans ce cas, chaque participant aura son propre référentiel, dit «local».
- La collaboration se fait à travers un référentiel partagé, dit «publique».

----

![](resources/png/collaboration.png)<!-- .element: style="width:800px; " -->

----

- Pour collaborer avec Bob, Anna et Carol doivent copier le contenu du référentiel publique.
- Cette copie s'appelle un «clonage». 

----

![](resources/png/clone.png)

----

- Ensuite Anna et Carol peuvent modifier les fichiers localement
- Les modifications peuvent être validées localement, créant plusieurs versions.
- Les version d'Anna et de Carol sont indépendantes.


----

![](resources/png/anna-carol-commit.png)


----

- Après avoir fini ses corrections, Anna souhaite les publier.
  - L'envoi des nouveautés locales au référentiel partagé s'appelle «push» (pousser).
- Avant de publier ses changements, Anna doit d'abord rapporter les nouveautés publiques.
  - La récupération des nouveautés du référentiel partagé s'appelée «fetch» (rapporter).


----
Aucune nouveauté à rapporter:
![](resources/png/anna-fetch.png)<!-- .element: style="width:800px; " -->

----

![](resources/png/anna-push.png)


----
- Un peu après Anna, Carol souhaite publier ses changements.
- Tout comme Anna, elle doit d'abord rapporter les nouveautés du référentiel publique.
- Mais dans son cas, le référentiel publique contient une nouvelle version


----

![](resources/png/carol-fetch.png)

----
- Après avoir rapporté les nouveautés publiques, Carol doit les fusionner.
- On appelle cette fusion un «merge».



----

![](resources/png/carol-merge.png)

----

- Après la fusion, Carol peut publier ses changements.

----

![](resources/png/carol-push.png)

----

- Enfin, Anna peut récupérer les changements faits par Carol. 
- Comme les opérations de «fetch» et «merge» se réalisent souvent ensemble, on peut les réunir dans une seule opération appelée «pull» (tirer).


----

![](resources/png/anna-pull.png)


----
## Plan

- Introduction
- Motivation
- Principes de base
- Versions
- Collaboration
- Forges<!-- .element: class="fragment highlight-blue" -->
- Conclusion

----
## Forges

- On appelle une «Forge» un serveur web dédié à l'hébergement de projets informatiques. 
- Généralement, une forge fournit les services suivants:
  - un ou des systèmes de gestion des versions (par exemple, Git ou Mercurial);
  - un gestionnaire de listes de discussion (et/ou des forums);
  - un outil de suivi des bugs (p. ex. Jira, Redmine,  Bugzilla.);
  - gestionnaire de documentation (wiki);
  - gestionnaire des tâches.

----
## Exemples de forge

- [GitHub](https://github.com): Plus de 77 millions de projets hébergés. 
- [SourceForge](https://sourceforge.net): Plus de 500.000 projets. 
- [Bitbucket](https://bitbucket.org): Plus de 6 millions de projets ouverts en 2017.
- [GitLab](https://about.gitlab.com): Logiciel libre permettant de déployer des forges
  - comme [GitLab Université de Nantes](https://gitlab.univ-nantes.fr).


----
## Plan

- Introduction
- Motivation
- Principes de base
- Versions
- Collaboration
- Forges
- Conclusion<!-- .element: class="fragment highlight-blue" -->

----
## Résumé des commandes Git

Commande | Description
--|--
git clone _url_ | copie un projet d'un référentiel publique
git stage _file_ | ajoute un fichier à la scène
git commit | valide les changements des fichiers "montés sur scène"
git status | montre l'état des fichiers de la copie locale

----

Commande | Description
--|--
git fetch | rapporte les nouveautés publiques
git merge | fusionne les changements rapportés
git push | publie les nouveautés du référentiel local

----
## Conclusion

- Les premiers gestionnaires de version ont été créés dans les années 80 (GNU RCS)
- Ils ont beaucoup évolué depuis, surtout après la montée en popularité des logiciels libres. 
- Grâce à l'historique des modifications, ils fournissent un vrai "filet de sécurité" aux développeurs
- Actuellement, il est impensable de réaliser un projet informatique sans un gestionnaire de versions.

----
## Derniers conseils

1. Utilisez toujours un gestionnaire de versions, même pour les petits projets.
1. Validez souvent
1. Validez **très** souvent
1. Récupérez souvent les changements publiques
1. Utilisez des outils dédiés
  - [GitKraken](https://www.gitkraken.com/)
  - [SmartGit](http://www.syntevo.com/smartgit/)

----

<!-- .element: data-background-image="resources/png/in_case_of_fire.png" data-background-size="700px" -->






