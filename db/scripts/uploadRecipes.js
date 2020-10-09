const { query } = require("../index.js");

let sqlStatementInsert = `
    INSERT INTO recipesTable(title, ingredients, instructions, image) 
    VALUES ($1, $2, $3, $4);`

module.exports = { async function createRecipeFunction(recipe){
        let newArray = [`${recipe.title}`, `${recipe.ingredients}`, `${recipe.instructions}`, `${recipe.image}`];
        let res = await query(sqlStatementInsert, newArray);
        console.log(res);
    }
}

createRecipeFunction();

// we want this code to add new recipes to the table once we have a post request
// getting the info from the post request.body
// we need it to go into here
