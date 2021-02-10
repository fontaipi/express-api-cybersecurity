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



Objectifs : 

Confidentialité : La base est créé sur un serveur physique. Les données qui y sont contenus ne sont pas senssible. Un éventuelle fuite de ces informations ne sera pas crtitique. (1/5)

Intégrité : Toutes les données dont contenus sur notre serveur physique et non dans le cloud. Pour l'instant aucune sauvegarde n'est faite dans le cloud ou sur une machine de secours. Si le machine qui héberge la base Mongo venais à étre comprimise, l'intégralité des données pourraient être perdues. (4/5)

Disponiblité : L'accès à la base de donnée ne se fait pas dans le cloud, de ce fait la disponibilité du service dépend de l'état du serveur faisant tourner l'application. Aucune statégie de disponibilité n'as été mise en place pour assurer un fonctionnement sans coupure. En revanche une perte de disponibilité ne sera pas critique pour l'application. (1/5)

Traçabilité : Toutes mes modification apparaisent dans les logs de MongoDB. Le base ne contiens pas de données sensible, il n'est donc pas primordial d'avoir une tracabilité maximale sur l'accès aux données. (1/5)

# Author

Pierre FONTAINE
