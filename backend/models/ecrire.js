const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const ecrireSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    laod:{
        type:Number,
    },
    reps:{
        type:Number,
        required:true,
    }
    },{ timestamps: true }

);
const ecrire= mongoose.model('ecrire',ecrireSchema)
module.exports = ecrire