// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		Name: {
			type: String,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
		// Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
		active: {
			type: Boolean,
			default: false,
		},
		reg:{
			type:String,
		},
		additionalDetails: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Profile",
		},
		projects: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Project",
			},
		],
		token: {
			type: String,
		},
        request:[{
            type: mongoose.Schema.Types.ObjectId,
				ref: "Project",
        }],
		sent:[{
			type: mongoose.Schema.Types.ObjectId,
				ref: "Project",
		}]
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);