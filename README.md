# What's in the fridge!

### Have you ever wanted to eat something, so you go to your fridge and you have a bunch of ingredients but don't know what to make out of them?

### This is the app for you!

#### Using Reactjs, Expressjs, PostgresSQL, Bootstrap and Node SASS, this multi-page app uses the API Spoonacular to fetch recipes when the user inputs thier ingredients and returns a series of recipes for the user to choose from.

---

## Authors

- Samuel Roy-Effer "SamRoyEffer"
- Jacob FitzGerald "hopeforbuddha"
- Methujan Jeyapalan "Methujan"

!["Home page of What's In the Fridge"](https://github.com/SamRoyEffer/WhatsInTheFridge/blob/master/Documents/HomePage.png?raw=true)
!["Lower Portion of the Home Page"](https://github.com/SamRoyEffer/WhatsInTheFridge/blob/master/Documents/LowerWebPage.png?raw=true)
!["The Fridge section of the app featuring user ingredient choices and generated recipes"](https://github.com/SamRoyEffer/WhatsInTheFridge/blob/master/Documents/Fridge.png?raw=true)

The Required Dependencies are as follows:

For the Back-end server

- "cookie-parser": "~1.4.4",
- "cors": "^2.8.5",
- "debug": "~2.6.9",
- "express": "~4.16.1",
- "morgan": "~1.9.1",
- "pg": "^8.7.1",
- "pg-native": "^3.0.0",
- "sass": "^1.36.0"

Additional Dev Dependencies

- "dotenv": "^10.0.0",
- "nodemon": "^2.0.12"

For the Front-end

- "@testing-library/react": "^11.2.7",
- "@testing-library/user-event": "^12.8.3",
- "autosuggest-highlight": "^3.1.1",
- "axios": "^0.21.1",
- "bootstrap": "^5.0.2",
- "cors": "^2.8.5",
- "lodash": "^4.17.21",
- "node-sass": "^6.0.1",
- "react": "^16.0.0",
- "react-autosuggest": "^10.1.0",
- "react-bootstrap": "^1.6.1",
- "react-dom": "^16.9.0",
- "react-elastic-carousel": "^0.11.5",
- "react-router-dom": "^5.2.0",
- "react-scripts": "4.0.3",
- "react-scroll-parallax": "^2.4.0",
- "sass": "^1.37.5",
- "spoonacular_api": "^1.0.0",
- "styled-components": "^5.3.0",
- "web-vitals": "^1.1.2"

Additional Dev Dependencies

- "react-dropdown-select": "^4.7.4"

Installation:

When the repo is cloned, run an initial `npm install`

Enter the backend-server directory and run an `npm install` in the directory

Enter the client directory and run an `npm install` in this directory as well

Creating the Database:

With PSQL installed create a database and a .env file in the back-end directory with the following paramaters

DB_HOST = localhost
DB_USER = "the user you use for PSQL"
DB_PASS = "Your password for the database"
DB_NAME = "name of your database"
DB_PORT = 5432

Do not change the port

Starting the backend server:
When the back-end is installed, simply run `nmp start` in the console to run normally or npm run dev to run with nodemon

The backend server is default on port 3001 but can be changed in the ./bin/www on line 15

Starting the client end:

When the client is installed, simply enter npm start into another console terminal.

Test that everything in running properly and enjoy.
