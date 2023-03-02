const path = require('path');
const fs = require("fs")


// Routing is here //

module.exports = (app) => {


 // GET request //
 
 app.get("/api/notes", (req, rep))

// "POST" request//
  
router.post('/notes', (req, res) => {
  console.log(req.body)
  store
      .addNote(req.body)
      .then(note => {
          res.json(note)
      })
      .catch(err => {
          res.status(500).json(err)
      })
})  
 // notes have been written to the 'db.json' file //

      fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
        if (err) throw err;
        console.log("Updated!");
      });
      res.json(true);
    };

    // "DELETE" request

    app.delete("/api/notes/:id", (req, res) => {
    
    router.delete('/notes/:id', (req, res) => {
        store
            .removeNote(req.params.id)
            .then(() => res.json({ ok: true }))
            .catch(err => res.status(500).json(err))
    })
    
  });

  module.exports = router;
