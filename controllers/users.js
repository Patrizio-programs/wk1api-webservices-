const mongodb = require('../routes/data/database.js')
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection('contacts').find();
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    try {
        const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        });
    } catch (error) {
        res.status(500).json(error);
    }

};


module.exports = { getAll, getSingle }