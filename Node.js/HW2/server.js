const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');

const port = 8000;
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
    app.post("/worker", (req, res) => {

        const worker = {
            name: req.body.name,
            age: req.body.age,
            category: req.body.category
        };

        database.db("workersdb").collection('workers').insert(worker, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(result.ops[0]);
            }
        });

    })

    app.get('/worker/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        database.db("workersdb").collection('workers').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(item);
            }
        });
    });

    app.delete('/worker/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        database.db("workersdb").collection('workers').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Worker ' + id + ' deleted!');
          } 
        });
      });

      app.put ('/worker/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const worker = {
            name: req.body.name,
            age: req.body.age,
            category: req.body.category
        };
        database.db("workersdb").collection('workers').update(details, worker, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(worker);
          } 
        });
      });

})