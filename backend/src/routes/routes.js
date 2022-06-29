const express = require('express');

const { getProjects } = require('../controllers/getProjects');
const { getSkills } = require('../controllers/getSkills');
const { getMessages } = require('../controllers/getMessage');
const { postMessage } = require('../controllers/postMessage');
const { getHome } = require('../controllers/getHome');



router = express.Router();

router.get('/', getHome)
router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/messages', getMessages);
router.post('/messages', postMessage);

module.exports = router;