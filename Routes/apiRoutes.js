const express = require ("express")
const router = express.Router ()
const path = require("path");
const fs = require("fs");
const uuid = require ("uuid");

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

router.delete("/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const delNotes = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  delNotes.id = uuid.v4();
  fs.writeFileSync("./db/db.json", JSON.stringify(delNotes))
  res.json(delNote);
}
)
module.exports = router;
