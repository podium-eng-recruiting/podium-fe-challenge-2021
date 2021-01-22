# Podium frontend take-home challenge (WIP)
Thank you for taking the time to complete this assessment! You have been provided with a boilerplate application and a mockup design that gives you just enough to complete the list of tasks outlined below. Unless otherwise stated, we expect you to document and test along the way as you see fit.

This assessment is broken into two separate parts. The first is required for all candidates and the following tasks are to be done in order. You may spend as much time as you feel is necessary and demonstrates your abilities:


1. Convert the data provided to match the designs you have been given. This includes building a reusable component for the movie items as well as a responsive layout for the entire view. Use whatever styling methods you prefer (inline styling, styled-components, etc). 
2. Add the ability to sort the data by any criteria of your choosing. Also add a unit test around your sort function.
3. Add the ability to filter the data by 1 or more key fields (eg. vote count, release date, etc). Also add a unit test around your filter function.
4. Add a new route for details view page (using react-router). Clicking on the movie item component should link to this route.


If you'd like to further showcase your skills, you may optionally choose from any of the below tasks to complete additionally: 


* Add a search bar that allows searching on 2 or more fields of the movie object. Search can be implemented client or server-side. Include a test for your search/filter function and document your decision.
* Add client or server-side pagination. Document your decision.
* Lazy load the images of the movie item component so they only load/appear once the component is visible.
* Add at least one chart or graph representing anything you feel is helpful to the end user
* Add functionality where clicking on an image preview expands the image in a modal/light box
* Use the provided `performance` functions to track when the page initially renders and has finished its initial load (TODO: clean this desc up)
* Add the ability to add comments to the details view page of the movie. Users should be able to create and delete comments (bonus points if you add in updating as well). There is a one-to-many association between movies and comments. Follow the json-server documentation for querying and creating associations. TODO: add some notes about the weird quirks with grapql-server and associations
* Add any custom feature you think would benefit the end user. Document your decision making process


## Setup and installation

This application is built with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and uses a [json-server](https://github.com/typicode/json-server) built around [the movie database](https://www.themoviedb.org/).

To get started, ensure you have the correct dependencies installed and run the following commands:

1. `yarn install`
2. `yarn start`

This will kick off two processes, the JSON server at [http://localhost:2022](http://localhost:2022) and the React server at [http://localhost:2021](http://localhost:2021). 

## Getting Started

The app is wired up to with the bare minimal setup to request a list of the top 100 movies and displays the results in a long list on the root page. You are welcome (and encouraged) to modify any part of the app, including the pre-existing `useFetchMovies` hook. Although this hook is currently using REST, the server is also compatible with GraphQL. If you are familiar with GraphQL, we would prefer that you use it over REST.  All functionality through either [json-server](https://github.com/typicode/json-server) or [json-graphql-server](https://github.com/marmelab/json-graphql-server) is available for your use. Routes and queries/mutations are also defined as outlined in the docs.

For example, the `movies` routes are:

```
GET    /movies
GET    /movies/1
POST   /movies
PUT    /movies/1
PATCH  /movies/1
DELETE /movies/1
``` 

Additionally, queries and mutations are available for the `Movie` type below: 

```
type Movie {
  id: ID!
  originalLanguage: String!
  originalTitle: String!
  overview: String!
  popularity: Float!
  posterPath: String!
  releaseDate: String!
  title: String!
  voteAverage: Float!
  voteCount: Int!    
}
```
	
## Final notes

* Please commit and check-in frequently, and try to track your time along the way. 
* Feel free yo use any third-party libraries, frameworks, etc. 
* This app is yours. Any changes to any part of the app are more than welcome!
* When you finish, make sure your final changes are pushed up to the branch and let your recruiter know.
