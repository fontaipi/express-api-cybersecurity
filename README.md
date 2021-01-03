# Express API Cybersecurity

Create a REST API based on [Node.js](https://nodejs.org/en/) with the framework [Express.js](https://expressjs.com/fr/).

The API contains a CRUD for utensils and categories in order to manage your kitechware.


# Start the API with Docker
Run the command : 

`docker-compose up`

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

Confidentialité : La base est créé localement pour chaque utilisateur. Il faudrait développer un version de production pour modifier cela (0/5)

Intégrité : Toutes les routes de l'API sont accessible sans token. (0/5)

Disponiblité : La base est uniquement créé en local à chaque lancement de l'application il n'y a donc pas de persistance. (0/5)

Traçabilité : Toutes mes modification apparaisent dans les logs de MongoDB. (5/5)

# Author

Pierre FONTAINE
