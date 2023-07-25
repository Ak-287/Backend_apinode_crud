
const express = require('express');
const router = express.Router();
const User = require('../models/datamodel')
const {getUser} = require('../controllers/Getuser')
const {getUsers} = require('../controllers/GetuserS')
const {addUser} = require('../controllers/Adduser')
const {updateUser} = require('../controllers/Updateuser')
const {deleteUser} = require('../controllers/Deleteuser')
const {searchuser} = require('../controllers/Searchuser')
const {searchbyname} = require('../controllers/Searchbyname')
const {searchbyemail} = require('../controllers/Searchbyemail')
const {searchbyaddress} = require('../controllers/Searchbyaddress')
const {searchbydob} = require('../controllers/Searchbydob')
const {searchbygender} = require('../controllers/Searchbygender')
const {searchbylocation} = require('../controllers/Searchbylocation')

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/search/:key', searchuser )
router.get('/searchbyname/:key', searchbyname )
router.get('/searchbyemail/:key', searchbyemail )
router.get('/searchbyaddress/:key', searchbyaddress )
router.get('/searchbydob/:key', searchbydob )
router.get('/searchbygender/:key', searchbygender )
router.get('/searchbylocation/:key', searchbylocation )


module.exports = router;