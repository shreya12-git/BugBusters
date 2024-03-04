const mongoose = require("mongoose");

// Define the Profile schema
const Skill = new mongoose.Schema({
    skill: {
        type: String,
    },
    marks:{
        type:Number,
        trim:true,
    },
    approve: {
        type: Boolean,
        default: false,
    },
});
const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    
    Skils:[Skill],

    contactNumber: {
        type: Number,
        trim: true,
    },
    Resume:{
        type:String,
    }
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);