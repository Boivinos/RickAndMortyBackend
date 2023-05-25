const database = require("./database");

const getCharacters = (req, res) => {
    let request = "select * from rick_character"    
  
    database
      .query(request)
      .then(([characters]) => {
        res.json(characters);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      });
  };

  const getCharactersByID = (req, res) => {
    const id = parseInt(req.params.id);
  database
    .query("select * from rick_character where id = ?", [id])
    .then(([characters]) => {
   if(characters!=null) {res.json(characters)}
   else {
     res.status(404).send("Not Found")}
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
  };

  const postCharacters = (req, res) => {
    const { name, status, origin, created, image } = req.body;
    database
    .query("INSERT INTO rick_character(name, status, origin, created, image) VALUES (?, ?, ?, ?, ?)",
    [name, status, origin, created, image])
    .then(([result]) => {
      res.location(`/character/${result.insertId}`).sendStatus(201)
      console.log(result.insertId);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error posting data from database");
    });
  };

  const deleteCharacterById = (req, res) => {
    const id = parseInt(req.params.id);
      database
      .query("DELETE FROM rick_character WHERE id = ?;",
       [id])
       .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Not Found");
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error deleting character");
      });
  };


  module.exports = {
    getCharacters,
    getCharactersByID,
    postCharacters,
    deleteCharacterById
  }