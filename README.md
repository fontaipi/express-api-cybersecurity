# Express API Cybersecurity

Create a REST API based on [Node.js](https://nodejs.org/en/) with the framework [Express.js](https://expressjs.com/fr/).

The API contains a CRUD for utensils and categories in order to manage your kitechware.


# Start the API with Docker
Run the command : 

`docker-compose up`

The app is running on http://localhost:3000/

# Security

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBBKC91dGVuc2lscykgLS0-XG4gICAgQih1dGVuc2lscykgLS0-IEdcbiAgICBDKC91dGVuc2lscy86aWQpIC0tPiBCXG4gICAgRCgvY2F0ZWdvcmllcykgLS0-IEZcbiAgICBFKC9jYXRlZ29yaWVzLzppZCktLT4gRlxuICAgIEYoY2F0ZWdvcmllcykgLS0-IEdcbiAgICBHWyhNb25nb0RCKV1cbiIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBBKC91dGVuc2lscykgLS0-XG4gICAgQih1dGVuc2lscykgLS0-IEdcbiAgICBDKC91dGVuc2lscy86aWQpIC0tPiBCXG4gICAgRCgvY2F0ZWdvcmllcykgLS0-IEZcbiAgICBFKC9jYXRlZ29yaWVzLzppZCktLT4gRlxuICAgIEYoY2F0ZWdvcmllcykgLS0-IEdcbiAgICBHWyhNb25nb0RCKV1cbiIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

| HTTP   | Route           | Utility                  |
|--------|-----------------|--------------------------|
| GET    | /utensils       | Retrieve all utensils    |
| POST   | /utensils       | Create a new utensil     |
| GET    | /utensils/:id   | Get utensil by id        |
| PATCH  | /utensils/:id   | Update a utensil by id   |
| PUT    | /utensils/:id   | Update a utensil by id   |
| DELETE | /utensils/:id   | Delete a utensil by id   |
| GET    | /categories     | Retrieve all categories  |
| POST   | /categories     | Create a new category    |
| GET    | /categories/:id | Get a category by id     |
| PATCH  | /categories/:id | Update a category by id  |
| PUT    | /categories/:id | Update a category by id  |
| DELETE | /categories/:id | Delete a category by id  |

Dans un premier temps il faut prendre en compte les injection NoSQL pour MongoDB :
* Au maximum éviter d'utiliser `where`, `mapReduce` ou `group` avec des données fournis par l'utilisateur car il est possible d'injecter du JS.
* Utiliser un model pour restreindre le type des données accepté pour chaque entité. Dans ce projet les model se trouvbent dans le dossier `/models`
* Nettoyer les données reçu par l'utilisateur et essayer de les vérifier au maximum pour éviter tout injection. Il existe par exemple la librairie [mongo-sanatize](https://www.npmjs.com/package/mongo-sanitize).
* Ajouter javascriptEnabled à `false` dans la config mongo. Cela va supprimer l'exécution de JS pour l'instance Mongo.

Il est également intéressant de sécurité notre protocole HTTP est le passant en HTTPS afin de sécurisé les communication. Pour cela il est nécessaire d'acheter un certificat SSL.

Il est également important de prévenir les attaque par déni de service (DOS) sur Mongo cela se caractérise généralement par du ReDoS (Regular Expression DoS) qui peut être évité en mettant à jour [eslint](https://www.npmjs.com/package/eslint).
Le DoS classique peut aussi être évité en limitant le nombre de requête API par utilisateur.

Nous utilisons `npm` comme gestionnaire de package. Il est donc important d'utiliser un bot de dépendance afin de mettre à jour nos package si jamais une vulnérabilité venait à être trouvée. Github propose le service [Dependabot](https://dependabot.com/#how-it-works) qui permet de mettre à jour les différents package via une PR directement sur git.

L'API est accessible par tout utilisateur connaissant l'URL à requêter. Il serait intéressant d'ajouter un service d’authentification afin de restreindre cet accès comme un accès restreint via une API Key.


Objectifs : 

Confidentialité : La base est créé sur un serveur physique. Les données qui y sont contenus ne sont pas senssible. Un éventuelle fuite de ces informations ne sera pas crtitique. (1/5)

Intégrité : Toutes les données dont contenus sur notre serveur physique et non dans le cloud. Pour l'instant aucune sauvegarde n'est faite dans le cloud ou sur une machine de secours. Si le machine qui héberge la base Mongo venais à être compromise, l'intégralité des données pourraient être perdues. (4/5)

Disponibilité : L'accès à la base de données ne se fait pas dans le cloud, de ce fait la disponibilité du service dépend de l'état du serveur faisant tourner l'application. Aucune stratégie de disponibilité n’a été mise en place pour assurer un fonctionnement sans coupure. En revanche une perte de disponibilité ne sera pas critique pour l'application. (1/5)

Traçabilité : Toutes les modifications apparaissent dans les logs de MongoDB. Le base ne contiens pas de données sensibles, il n'est donc pas primordial d'avoir une traçabilité maximale sur l'accès aux données. (1/5)


# Author

Pierre FONTAINE
