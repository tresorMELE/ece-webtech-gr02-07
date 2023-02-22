# ece-webtech-gr02-07

## Lab1

Ce projet sert de base aux futurs cours et projets. L'objectif est de créer un script Node.js simple qui peut être utilisé pour créer un serveur HTTP de base, intégrer Nodemon, créer une application de base avec plusieurs routes, et lire à partir d'un fichier JSON. Le projet final sera publié sur GitHub ou GitLab, et la note reflétera le projet livré et son historique Git.

## Prérequis

Installation d'un éditeur de texte ou un IDE, Git, et Node.js.

## Étapes

Les étapes ci-dessous pour utilise l'API :

Le projet récupère à partir d'un fichier JSON les articles et les affiches.
### Pour le projet "Hello":

1. lancer dans le terminal: npm run develop pour lancer le serveur
1. mettre l'url: http://localhost:8080 dans le naviateur pour voir la page ou utiliser Postman.
2. Initialiser un dépôt Git et un paquet Node.js.
3. Créer un script Node.js simple.
4. Créer un serveur HTTP et modifier le fichier index.js.

#### Pour l'API Articles:

1. Requête POST http://localhost:8080/articles/  + paramètres pour ajouter un article
1. Requête POST http://localhost:8080/articles/:articleId/comments pour ajouter un commentaire
1. Requête GET http://localhost:8080/articles/:articleId pour afficher le contenu de l'article via son Id
1. Requête GET http://localhost:8080/articles/ pour afficher tous les articles
1. Requête GET http://localhost:8080/articles/:articleId/comments pour afficher les commentaires de l'article via son Id.