# Would You Rather

This is my solution for project 2 in the [React ND][reactnd]. It uses React and Redux to build an app that lets you:
* select a user
* create "Would you rather" questions
* answer questions
* see previous answers
* track users on a leaderboard

## See it in action

This app is deployed at https://danehammer.rocks/reactnd-would-you-rather/

## Running locally

1. Clone the repo
2. Run `yarn install`
  * assuming you have `node` and `yarn` installed
3. Start the app by running `yarn start`

This will open your default browser and navigate to `http://localhost:3000`

The app uses a fake database to store the starter data in memory, as well as updates. This means changes will not persist beyond a single session.

There is a logging middleware applied to the redux store, so you can see redux store changes in the console.

[reactnd]: https://www.udacity.com/course/react-nanodegree--nd019
