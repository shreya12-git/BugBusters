const mongoose = require("mongoose");

// Define the Profile schema
const question = new mongoose.Schema({
    Question: {
        type: String,
    },
    Options:[{
        type:String,
        trim:true,
    }],
    Correctoption: {
        type:String,
    },
});
const profileSchema = new mongoose.Schema({
    Skill:{
        type:String,
    },
    Questions:[
        question
    ],
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);