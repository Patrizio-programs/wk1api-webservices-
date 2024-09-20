const mongodb = require('../routes/data/database.js')
const ObjectId = require('mongodb').ObjectId;
const { getDatabase } = require('../routes/data/database.js')
const getAll = async (req, res) => {
    try {
      const result = await mongodb.getDatabase().db().collection('contacts').find()
      result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users',  error: error.message });
    }
  }

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    try {
        const result = await mongodb.getDatabase().db().collection('contacts').find({ _id:userId });
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        });
    } catch (error) {
        res.status(500).json(error);
    }

};


module.exports = { getAll, getSingle }