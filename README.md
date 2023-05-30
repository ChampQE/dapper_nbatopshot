# dapper_nbatopshot

This repo contains the user flows for Dapper nbatopshot testing the critical new user scenarios of the NBA Top Shot web application, with a focus on basic navigation and perceived functionality with the e2e tests written in Cypress.

Each test covers the functionality :

Verify that the home page loads correctly.
Verify that user can search for a specific player or moment.
Verify that user can view details of a moment.
Verify that user can add a moment to their cart. 

The tests are commented to ease you to tell whih is one doing what at each step 

The steps below will take you all the way through Cypress installationa nd being able to run these 4 tests. 

It is assumed you have nothing installed except for node + git.

1. Install Cypress

Follow these instructions to install Cypress - https://docs.cypress.io/guides/getting-started/installing-cypress.

2. Fork this repo

After forking this project in Github, run these commands:

## clone this repo to a local directory
git clone https://github.com/<your-username>dapper_nbatopshot.git

## cd into the cloned repo
cd dapper_nbatopshot

We are now ready to run Cypress tests.

## To run the tests from terminal 
npx cypress run 


