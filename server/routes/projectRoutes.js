const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { addProject, getProject, updateProject, deleteProject } = require('../controllers/projectControllers');
const router = express.Router ();



router.post('/', addProject);
router.get('/', getProject);
router.put('/:projectId', updateProject);
router.delete('/:projectId', deleteProject);
module.exports = router;