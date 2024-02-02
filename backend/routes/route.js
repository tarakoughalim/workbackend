const express = require('express');
const router = express.Router();
const {get_ecrire, save_exo, deleteExo} = require("../controllers/workout_controller");


router.get('/get/',get_ecrire)
router.post('/addNewWorkout/',save_exo)
router.delete('/deleteExo/:id' ,deleteExo )

module.exports=router

