const router = require('express').Router();

const mongodb = require('./data/database');
router.get('/', (req, res) => {res.send('Hello World!')});

mongodb.initDb((err) => {
    if (!err) {
        console.log('Database initialized');
    }
});
module.exports = router