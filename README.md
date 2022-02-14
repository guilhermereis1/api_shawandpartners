### Api Backend Shaw and Partners

Install Dependencies

`npm install`

Run app

`yarn dev`

Run tests

`yarn test`

Watch tests

` yarn test:watch`

##### 1. Create an API that will proxy all client requests to the appropriate GitHub endpoint. The following endpoints must be provided:

#### [OK] GET - /api/users?since={number}

This endpoint must return a list of GitHub users and the link for the next page.

#### [OK] GET - /api/users/:username/details

This endpoint must return the details of a GitHub user

#### [OK] GET - /api/users/:username/repos

This endpoint must return a list with all user repositories

##### [OK] Create tests for your application covering all endpoints.
