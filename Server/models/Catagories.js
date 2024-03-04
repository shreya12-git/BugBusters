const mongoose = require("mongoose");

const tags = new mongoose.Schema({
    domain:{
        type:String,
    },
    projects:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
})