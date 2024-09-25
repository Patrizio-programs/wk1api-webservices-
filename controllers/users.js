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


const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    try {
        const response = await getDatabase().db().collection('contacts').insertOne(contact);
        res.status(201).json(response.insertedId);
    } catch (error) {
        res.status(500).json({ message: 'Error creating contact', error: error.message });
    }
}

const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    try {
        const response = await mongodb.getDatabase().db().collection('contacts').updateOne({ _id: userId }, { $set: contact });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    try {
        const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({ _id: userId });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact }