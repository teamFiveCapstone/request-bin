express app that listens for incoming HTTP requests and stores data

PostgreSQL will store method, url, headers, timestamp

MongoDB will store request body

##
1.) run npm init -y to create package.json and say yes to use default options 

2.) install dependencies by running npm install express pg mongoose body-parser
    -body-parser is a Node.js middleware module that lets us use the body from HTTP reuqests

3.) Setup postgreSQL(my username is zachbajcar)
    - check if it's installed run psql --version
    - if not on mac run brew install postgresql
    -connect by running psql
    -create database by running 
        - CREATE DATABASE requestbin;
    -connect to it by running
        - \c requestbin
    -create a table by running
        - CREATE TABLE request_metadata (
            id SERIAL PRIMARY KEY,
            basket_id TEXT NOT NULL,
            method TEXT NOT NULL,
            url TEXT,
            headers text,
            timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            body_id TEXT -- MongoDB document ID
        );

4.) setup MongoDB
    -check if it's install by running mongod --version
        -if not on mac run 
            - brew tap mongodb/brew
            - brew install mongodb-community
        -create a local data folder by running
            - mkdir -p ./data/db
        -start mongoDB with that data path(it connects on port 27017)
            - mongod --dbpath=./data/db
            (the above will auto create requestbin database automatically on insert)
