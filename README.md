# node_users_management

## Background

This project was done as a home assignment with almost no knowledge in NodeJS before this assignment.

## Project Summary

This tool serves as a backend service that provides APIs to manage users DB.

It offers 3 APIs to do so.

## How to use
1. **GET /users**
<br>Used to get a list of all current users in the system.
2. **POST /users**
<br>Used to add a new user to the system.
3. **DELETE /users/:user_id**
<br>Used to delete a user from the system.

## How to install
The tool can be installed in two ways:
1. Locally
<br>In order to run the project locally follow these steps:
```diff
    $ npm install
    $ npm run start
```

2. Inside a docker container:
<br>In order to run it inside a docker container you'll need to have Docker Desktop client installed, please see:
https://docs.docker.com/desktop/
<br>After docker installed all you need to do is run:
```diff
    $ docker-compose up -d
```
