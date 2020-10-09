const { query } = require("../index.js");

let sqlStatementInsert = `
    INSERT INTO recipesTable(title, ingredients, instructions, image) 
    VALUES ($1, $2, $3, $4);`

let sqlStatementSelect = `
    SELECT *
    FROM recipesTable;`

module.exports = {
    createRecipeFunction: async function (recipe){
        let newArray = [recipe.title, recipe.ingredients, recipe.instructions, recipe.image];
        let res = await query(sqlStatementInsert, newArray);
        console.log(res);
    },

        
    getRecipeFunction: async function(){
        let res = await query(sqlStatementSelect);
        console.log(res.rows);
        return res.rows;
        } }
        
    


// we want this code to add new recipes to the table once we have a post request
// getting the info from the post request.body
// we need it to go into here
