const router = require('express').Router();
const mongodb = require('./data/database');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.use('/', require('./swagger'));
router.get('/', (req, res) => {res.send('Hello World!')});

//connect users
router.use('/users', require('./users'));
//database init
mongodb.initDb((err) => {
    if (!err) {
        console.log('Database initialized');
    }
});
module.exports = router