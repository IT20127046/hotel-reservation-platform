const express = require('express');
const Users = require('../models/customerModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router();

process.env.SECRET_KEY = 'secret2022';

//user registration with password encryption
router.post('/customer/registration', (req, res) => {
    const current = new Date();
    let userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        NIC: req.body.NIC,
        email: req.body.email,
        mobile: req.body.mobile,
        country: req.body.country,
        password: req.body.password,
        dateRegistered: current
    }

    Users.findOne({
        NIC: req.body.NIC
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    // console.log("bcrypt")
                    Users.create(userData)
                        .then(res => {
                            // console.log("then")
                            
                            res.status(200).json({
                                success: "Registered successfully"
                            })
                            
                        })
                        .catch(err => {
                            // console.log("catch")
                            res.status(400).json({
                                errorMessage: 'Something went wrong!',
                                status: false
                              });
                        });
                })

            }
            else {
                return res.status(401).json({
                    errorMessage: 'You already have an account',
                    status: false
                }); 
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: 'Something went wrong!',
                status: false
              });
        })
})

//user login with jsonwebtoken
router.post('/customer/login', (req, res) => {
    Users.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        NIC: user.NIC,
                        email: user.email,
                        mobile: user.mobile,
                        country: user.country,
                        password: user.password,
                        dateRegistered: user.dateRegistered
                    }
                    const userToken = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(userToken)
                }
                else {
                    return res.status(401).json({
                        errorMessage: 'User unauthorized!',
                        status: false
                    });  
                }
            }
            else {
                return res.status(401).json({
                    errorMessage: 'User unauthorized!',
                    status: false
                }); 
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: 'Something went wrong!',
                status: false
              });
        })
})

//user profile
router.get('/customer/profile', (req, res) => {
    var decodedToken = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    Users.findOne({
        _id: decodedToken._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            }
            else {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send("Error" + err);
        })
})


// --------------------------------for admin-------------------------------------------------
//get a specific user
router.get('/customer/:id', (req, res) => {

    let userId = req.params.id;

    Users.findById(userId, (err, user) => {
        if (err) {
            return res.status(404).json({
                success: false,
                err
            })
        }

        return res.status(200).json({
            success: true,
            user
        })
    })
})

//get users
router.get('/customers', (req, res) => {
    Users.find().exec((err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            success: true,
            existingUsers: users
        })
    })
});

//update user
router.put('/customer/update/:id', (req, res) => {
    Users.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            return res.status(200).json({
                success: 'Updated successfully'
            })
        }
    )
});

//delete user
router.delete('/customer/delete/:id', (req, res) => {
    Users.findByIdAndDelete(req.params.id).exec((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        return res.json({
            message: 'Deleted succesfully', deletedUser
        })
    })
})

module.exports = router;