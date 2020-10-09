// HACKATHON PLAN

// Set up our server so it can process GET and POST queries, responses
    // Express is a framework  that enables us to interact with ou local servier and handles HTTP requests sent to it
    // Express is in package.json - 
        // GET RESPONSE - 
            // Directory - hackathons-servers-emzbel - pathname to HTML 
            // So it will display the recipes once a SELCT FROM query has been sent

/// When user input a recipe -> FRONT END
    // We will set up an app.post response to this HTTP request
    // Within app.post - we need a INSERT INTO SQL function - that adds to our database

// When a user sends a fetch request 
    // We recieve as a app.get
    // We need to do a SELECT SQL function that gets recipe info from our database

// WE need to set up a database file in our projects - with our SQL functions in/we populate

// We need to set up our datase - Heroku
    // POOL to connect to our database
    // Using postgreSQL - connect database to our Node.JS - Config info - POOL
    // POOL.query - need to destructure - enables us to send queries to our database
    // Create seperate Node.JS files to host our SQL functions - 
        // functions create table, insert recipes, select from
    // CREATE TABLE SQL function called recipes
        // Column names (ID, title, ingredients, instructions, image)
    // Set up Add Ingredients - INSERT INTO recipes VALUES - use an array - or get user iput
    // Set up a QUERY Recipe/ to get recipe SELECT FROM

// IN front end JS - main.js - which contains DOM stuff
    // Change API to our local server localhost5000/recipes