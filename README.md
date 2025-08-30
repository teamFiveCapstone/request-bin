# RequestBin
Express app that listens for incoming HTTP requests and stores data

PostgreSQL will store method, url, headers, timestamp

MongoDB will store request body

## Local Setup

1. run `npm ci` to install dependencies from package-lock.json
1. Install postgres (`brew install postgresql` on Mac) if you don't have it already
1. Run postgres setup script: 

    ```
    psql -U <your username> -f setup.sql
    ```

1. Install MongoDB if you don't have it already
    ```
    brew tap mongodb/brew
    brew install mongodb-community
    mongod --version
    ```

1. If this is your first time cloning the repo, create a 

    ```
    mkdir -p ./data/db
    ```
1. Start MongoDB with the above data path (it connects on port 27017)
    ```
    mongod --dbpath=./data/db
    ```
