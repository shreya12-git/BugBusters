const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const Profile = require("../models/Profile");
const Project = require("../models/Project");

require("dotenv").config();

exports.createprofile = async (req,res)=>{
    try {
        const{id,Name,skill,gender,DOB,contact,reg,resume}=req.body;
        const user = await User.findById(id);
        const profile = await Profile.findById(user.additionalDetails);

        profile.gender = gender;
        profile.reg = reg;
        profile.contactNumber = contact;
        user.Name = Name;
        profile.dateOfBirth = DOB;
        await profile.save();
        await user.save();
        const skillsCount = skill.length;
        for (let i = 0; i < skillsCount; i++) {
            await Profile.findByIdAndUpdate({_id:profile._id},
                {
                    $push:{
                        Skills:{
                            skill:skill[i],
                        }
                    }
                })
          }
        return res.status(200).json({
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.listProject = async (req,res)=>{
    try {
        const {id,projectname,desc,skills,size,category}=req.body;
        const project = await Project.create({
            projectName:projectname,
            projectDescription:desc,
            Skills:skills,
            Teamsize:size,
            status:"Posted",
            category:category,
            Leader:id
        })
        const user = await User.findByIdAndUpdate({_id:id},{
            $push:{
                projects:project._id,
            }
        },{new:true})
        return res.status(200).json({
            success:true,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
