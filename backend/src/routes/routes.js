const { getProjects } = require('../controllers/getProjects');
const express = require('express')

router = express.Router();

router.get('/', getProjects);

module.exports = router;