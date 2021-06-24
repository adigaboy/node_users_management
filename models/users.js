const express = require('express');
const router = express.Router();
const isEmpty = require('../utils/utils');
router.use(express.json());
const db = require('../db/index');
const crypto = require('crypto');


router.get('/', (req, res) => {
    db('users').select('user_id', 'name', 'email').then(
        data => {
            res.status(200).json(data);
        }).catch(
            err => {
                console.log(err);
                res.status(500).json({"error": "Server error, couldn't get the users list"});
        }
    );
});
  
router.post('/', (req, res) => {
    if (isEmpty(req.body) || !req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({"error": "Please send name, email and password in the request body"});
    }
    db('users').insert({name: req.body.name, email: req.body.email, password: crypto.createHash('md5').update(req.body.password).digest('hex')}).then(
        data => {
            console.log('added user');
            res.sendStatus(200);
        }
    ).catch(
        err => {
            console.log(err);
            res.status(500).json({"error": "Server error, couldn't register the user"});
        }
    );
});

router.delete('/:user_id', (req, res) => {
    db('users').where({user_id: req.params.user_id}).del().then(
        data => {
            if (data == 0) {
                res.status(404).json({"error": `Couldn't find user_id ${req.params.user_id}`});
            } else {
                console.log(`deleted ${req.params.user_id}`);
                res.sendStatus(200);
            }
        }
    ).catch(
        err => {
            console.log(err);
            res.status(500).json({"error": "Server error, couldn't delete the user"});
        }
    )
});

module.exports = router;