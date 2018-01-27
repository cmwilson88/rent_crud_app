# JSON Placeholder CRUD App
#### A Rentalutions Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


### Installing

To run this project, run the following steps:

Clone this repo to your local machine

```
git clone https://github.com/cmwilson88/rent_crud_app.git
```

Change directory into the newly created directory

```
cd rent_crud_app
```

Install dependencies
```
npm install
```

After installation, you should see a similar message:
```
added [number] packages in [seconds]s
```

## Running the tests

Unit tests are written using the Jest framework using the create-react-app built in tests script.  Component tests are written using Enzyme.

To run the tests, execute the following commands in the terminal
```
npm run test
```

To receive test coverate report, run the following:
```
npm run test -- --coverage
```

Currently the project needs better test coverage, but most of the redux actions are tested.

## Running the Application

In your terminal, run the following command:
```
npm run start
```

This will run the development server and the web application can be accessed via localhost:3000.  The list of posts can be accessed via the home ("/") route, and individual posts and their respective comments can be found using the path ("/post/:id") where :id is the numerical id for a post.



## Key Packages


- Redux & React-Redux : Centralized state utility
- Validator : Validation framework for validating form inputs
- Jest : Testing framework for unit tests
- Enzyme : Testing framework for easier component testing
- ESLint : ESLint is installed and configured to help keep code clean.  Currently project needs to be linted more thoroughly

## Stories

The following user stories were met:

```
- An interface to interact with posts and comment on them, fully backed by this JSON API

- Ability to view posts or a single post

- Ability to list comments under each post, and add your own comment

- Ability to update your comment or delete it
```

## Notes

- Container Components are components that are connected to Redux store.  Local methods are created in Containers to dispatch Redux actions and those local methods are passed to child components to be called within the the child.

- Test files for components accompany the components in the same directory with the test.js file format.  Test files for redux code cane be found in "__test__" folders within each redux folder

- Styles were written in root CSS files for each feature (Comment, Post, etc), with attemps at using BEM format, but it could be cleaner.  It is semi-mobile repsonsive.