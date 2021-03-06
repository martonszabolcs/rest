var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
     const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
app.post('/notes', (req, res) => {
    const note = { 
      nev:{
        elso: req.body.elso,
        masodik: req.body.masodik
      } , 
      szuletesi: req.body.szuletesi, 
      anyja: req.body.anyja };
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops);
      }
    });
  });
};
