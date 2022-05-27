const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { addProject, getProject, updateProject, deleteProject } = require('../controllers/projectControllers');
const router = express.Router ();


const multer = require('multer');

//Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './public');
    },
   
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}_${file.originalname}`
        cb(null, fileName)
    }
})

const upload = multer({storage})

router.post('/upload',upload.single('project'),(req,res)=>{
    console.log(req.file)
    const path= `http://localhost:5000/upload/${req.file.filename}`
    res.json(path)
})
router.post('/', addProject);
router.get('/', getProject);
router.put('/:projectId', updateProject);
router.delete('/:projectId', deleteProject);
module.exports = router;