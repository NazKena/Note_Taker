const express = require ("express")
const path = require("path");
const fs = require("fs");
const router = express.Router ()

  // GET request //

  router.get("/notes", (req, res) => {
    fs.readFile("db/db.json","utf-8",(err,data)=>{
        if (err){
            console.log(err) 
        } else{
            return res.json(JSON.parse(data))
        }
    })
});

  // "POST" request//

  router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});


// "DELETE" request

router.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  let currentNotes = JSON.parse(currentNotesRaw);
  currentNotes = currentNotes.filter((note) => note.id !== id);
  fs.writeFile("./db/db.json", JSON.stringify(currentNotes), (err) =>
    err ? console.error(err) : console.log(`Note has been deleted`)
  );
  res.send(id);
  readDatabase();
});

module.exports = router;
