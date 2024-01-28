const {sendQuery} = require('../controller/Email');
const express = require('express');
const router = express.Router();


router.post('/send-query', sendQuery);


module.exports = router;