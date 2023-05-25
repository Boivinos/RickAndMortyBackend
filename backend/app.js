require("dotenv").config();
const express = require("express");
var cors = require('cors')
var app = express() 
app.use(cors())
const port = process.env.APP_PORT ?? 5000;
app.use(express.json());


app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});
  
const characterHandler = require("./characterHandler");
  
  app.get("/", characterHandler.getCharacters);
  app.get("/character/:id", characterHandler.getCharactersByID);
  app.post("/character", characterHandler.postCharacters);
  app.delete("/character/:id", characterHandler.deleteCharacterById);
 