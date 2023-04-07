const express = require('express');
const userSchema = require('../models/user')

const router = express.Router();

// routes

// get users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            res.json({message: error});
        });
});

// get user by id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            res.json({message: error});
        });
});

// create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            res.json({message: error});
        });
});

// update user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email} = userSchema(req.body);
    userSchema
        .updateOne({_id: id}, {$set: {name, age, email}})
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            res.json({message: error});
        });
});

// delete
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findByIdAndRemove({_id: id})
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            res.json({message: error});
        });
});

// exportar rutas
module.exports = router;