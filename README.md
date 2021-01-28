# Podium frontend take-home challenge
Thank you for taking the time to complete this assessment. This application contains the necessary starting grounds for you to complete the tasks as outlined below. Please take as much time as you feel is necessary to demonstrate your ability. Unless otherwise stated, you are expected to document and test along the way as you see fit. 


## Project Description
Your task is to build an application that matches the design mock-ups ([as found here](https://share.goabstract.com/b949487b-4df0-4431-8ca3-6cd912096898)) around a list of popular movies from [The Movie Database](https://www.themoviedb.org/). All assests are provided to you in the app. You are welcome to use them however you prefer. This assessment is broken into two separate parts, the first being to convert the data provided to meet the designs you have been given. Here are some important things to keep in mind:

* The first section contains the top 5 movies of the data set, according to rating. Document how determined this order. Hovering over a movie in this section reveals a button that when clicked, navigates to a detailed view of the movie. This view should be on a separate route and should match the provided designs.
* The second section allows the end user to filter by genre. Clicking a filter should navigate to a new page showing the category and associated films as shown in the designs. Also create a unit test around your filter function. This page is also sortable (see next step).
* The third section shows all movies with an option for the user to sort by an order of their choice. Create a unit test around your sort function. Clicking on a movie in this section links to the same detail view page as in the initial step. 

Once the above steps are completed and if you'd like to further showcase your skills, you may optionally choose from any of the below tasks to complete additionally. The designs for these are up to you: 

* Add a search bar that allows searching on 2 or more fields of the movie object. Search can be implemented client or server-side. Include a test for your search/filter function and document your decision.
* Add client or server-side pagination. Document your decision.
* Lazy load the images of the movie item component so they only appear once the component is visible.
* Add at least one chart or graph representing anything you feel is helpful to the end user.
* Add functionality where clicking on an image preview in the first section expands the image in a modal or light box.
* Use the provided tracking functions (currently located in `App.js`) to track when the page initially loads and has completely finished rendering. Each function should be called a maximum of 1 time per page load.
* Add the ability to add comments to the details view page of the movie. Users should be able to view and create comments (bonus points if you add in updating and deleting as well). There is a one-to-many association between movies and comments. Follow the [json-server documentation](https://github.com/typicode/json-server#relationships) for querying and creating associations.
* Add any custom feature you think would benefit the end user. Document your decision making process.


## Setup and installation

This application is built with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and uses a [json-server](https://github.com/typicode/json-server) built around [the movie database](https://www.themoviedb.org/).

To get started, ensure you have the correct dependencies installed and run the following commands:

1. `yarn install`
2. `yarn start`

This will kick off two processes, the JSON server at [http://localhost:2022](http://localhost:2022) and the React server at [http://localhost:2021](http://localhost:2021). 

## Getting Started

The app is wired up to with the bare minimal setup to request a list of popular movies and displays the results in a long list on the root page. You are welcome (and encouraged) to modify any part of the app, including the pre-existing `useFetchMovies` hook. Although this hook is currently using REST, the server is also compatible with GraphQL. If you are familiar with GraphQL, we would prefer that you use it over REST.  All functionality through either [json-server](https://github.com/typicode/json-server) or [json-graphql-server](https://github.com/marmelab/json-graphql-server) is available for your use. Routes and queries/mutations are also defined as outlined in the docs.

For example, the `movies` routes are:

```
GET    /movies
GET    /movies/1
POST   /movies
PUT    /movies/1
PATCH  /movies/1
DELETE /movies/1
``` 

Additionally, queries and mutations are available for the `Movie` type below. Please note that due to limitations of `json-server` these types are auto-defined and are not exactly correct as if this were a prod environment: 

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
  genres: [String]!
  budget: Int!
  runtime: Int!
  cast: [Cast]!
  director: Director!
}
```
	
## Final notes

* Please commit and check-in frequently, and try to track your time along the way. 
* Feel free to use any third-party libraries, frameworks, etc. 
* This app is yours. Any changes to any part of the app are more than welcome!
* When you finish, follow the instructions provided to you by your recruiter.
