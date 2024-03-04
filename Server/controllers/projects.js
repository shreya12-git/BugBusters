const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const Profile = require("../models/Profile");
const Project = require("../models/Project");
const { request } = require("express");

exports.sendadminrequest = async(req,res) =>{
    try {
        const {id,userid}=req.body;
        const user = await User.findByIdAndUpdate({_id:userid},{
            $push:{
                request: id,
            }
        })
        const project = await Project.findByIdAndUpdate({_id:id},{
            $push:{
                Sent:id,
            }
        })
        return res.status(200).json({
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
exports.senduserrequest = async(req,res) =>{
    try {
        const {id,userid}=req.body;
        const user = await User.findByIdAndUpdate({_id:userid},{
            $push:{
                sent: id,
            }
        })
        const project = await Project.findByIdAndUpdate({_id:id},{
            $push:{
                Request:id,
            }
        })
        return res.status(200).json({
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
exports.acceptadmin = async(req,res)=>{
    try {
        const {id,userid}=req.body;
        const project = await Project.findOneAndUpdate(
            { _id: id },
            { $pull: { Request: userid } },
            { new: true } // To return the updated document
        );
        const proj = await Project.findOneAndUpdate({_id:id},{
            $push:{
                Members:userid,
            }
        },{new:true});
        const user = await User.findByIdAndUpdate({_id:userid},{
            $pull:{sent:id}
        },{new:true})
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
exports.acceptuser = async(req,res)=>{
    try {
        const {id,userid}=req.body;
        const project = await Project.findOneAndUpdate(
            { _id: id },
            { $pull: { Sent: userid } },
            { new: true } // To return the updated document
        );
        const proj = await Project.findOneAndUpdate({_id:id},{
            $push:{
                Members:userid,
            }
        },{new:true});
        const user = await User.findByIdAndUpdate({_id:userid},{
            $pull:{request:id}
        },{new:true})
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
exports.allprojects = async(req,res)=>{
    try {
        const allprojects = await Project.find({});
        return res.status(200).json({
            success:true,
            data:allprojects,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.alluserprojects = async(req,res)=>{
    try {
        const id = request.params.id;
        const allproject = await Project.find({_id:id});
        return res.status(200).json({
            success:true,
            data:allproject,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}