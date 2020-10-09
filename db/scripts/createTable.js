const { query } = require("../index.js");

console.log(query);

let sqlStatement = `CREATE TABLE recipesTable(
    id SERIAL PRIMARY KEY,
    title TEXT,
    ingredients TEXT[],
    instructions TEXT,
    image TEXT
    );`;

async function createTable(){
    let res = await query(sqlStatement);
    console.log(res);
}

createTable();


