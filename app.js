const path = require("path");// Path is an npm module
const express = require("express"); // Express module NPM
const app = express();// calling the express Module, framework that interacts with server and handles requests
const port = 5000; // Connected to post 5000

app.use(express.static("public"));  //
app.use(express.json()); // Connect to the Body in PostMan

const data = [
  {
    title: "Beans on Toast",
    ingredients: ["150g of beans", "150g of butter", "150g of toast"],
    instructions: `Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.

  Season to taste.`,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
  }
];

// CREATE a database that ahs name recipes
// colum names = (title, ingredients, instructions, image)
// Each recipe is a row in the database so will need to be added with VAlUE


app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`)); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}
);

app.get("/recipes", function (req, res) {
  res.json({success:true, payload:data });
});

app.post("/recipes", async (req, res)=>{
    const recipe = req.body;
    data.push(recipe)
    console.log(recipe); 
    console.log(data); 
  });

// res.sendfile - so when we handle this get recipe request it displays it on the HTML page
// maybe our directory name
// sending a file to the localhost page - our server
// get to get a recipe out - which answers a front end fetch request
// 

// app.get(`/astronauts`, async (req, res)=>{
//   const  astronauts = await getAstronauts();
//   res.json({success:true, payload:astronauts });
// });

// app.post("/recipes", function (req, res) {

// });
// post is to create a new recipe - response to data inout into the front end fields on browser
// Links to SQL function to add data to the table