# Sample_Jack_Real-estate Site

This repository is a personal project that is used to mock up a realestate website specificially designed for Jack Tran, a real estate agent located in Westminster, Huntington Beach, and Fountain Valley area.

## Tech Stack
ReactJS | PostgreSQL | Nodejs | Foundation6 | CSS 

## Using repository locally
Getting started:

The codebase uses Zillow and Attom API to obtain real estate information from the surrounding areas. It is necessary to API keys from both companies prior to downloading and running locally.\
Please visit their respective sites for API information:\
Attom
> https://api.developer.attomdata.com/docs 

Zillow
> https://www.zillow.com/howto/api/APIOverview.htm

Once API keys are obtained:
```
Npm install => to get all dependecies
```
This repository uses PostgreSQL, please refer to documentations if PostgreSQL is not installed on local machine:
> https://www.postgresql.org/docs/10/tutorial-start.html

**ENV**\
Please replace all information inside the ENV file to correspond to your database authentication information. Be sure to ignore prior to commit. 

## Seeding:
To see fake home data:
```
npm run seed
```

## Starting server locally and webpack
```
npm start
npm run react-dev
```

## Ongoing Project: 
Current functionalities are limited as this is an ongoing project. The mock-up is being reviewed and additional features will be added in the future. 
