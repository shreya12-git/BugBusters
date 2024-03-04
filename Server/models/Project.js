const mongoose = require("mongoose");

// Define the Courses schema
const projectSchema = new mongoose.Schema({
	projectName: { type: String },
	projectDescription: { type: String },
	Leader: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	Skills: [{
		type: String,
	}],
	Teamsize:{
        type:Number,
    },
    Members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }],
	Request:[{
		type:mongoose.Schema.Types.ObjectId,
        ref:"user",
	}],
	category: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "Category",
	},
	status: {
		type: String,
		enum: ["Posted", "Started","Completed"],
	},
});

// Export the Courses model
module.exports = mongoose.model("", projectSchema);