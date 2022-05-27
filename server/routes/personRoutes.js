const express = require('express');
const { register, login, getPersonData } = require('../controllers/personControllers');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router ();
const multer = require ('multer');

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

const upload = multer({ storage}).single('receipt')

router.post('/register',register);
router.post ('/login',login)
router.get('/',authMiddleware , getPersonData);

router.post('/uploads', upload, (req, res) =>{
    const {file} =req;
    res.send({
        file: file.originalname,
        path: file.path,
    });
});
module.exports = router;