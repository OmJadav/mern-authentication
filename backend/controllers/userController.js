import { json } from "express";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user && (await user.matchPassword(password))) {
            generateToken(res, user._id);
            return res.status(201).json({ _id: user._id, name: user.name, email: user.email, message: "User Authorized" });
        } else {
            res.status(400);
            throw new Error("Invalid email or password")
        }
    } catch (err) {
        next(err);
    }
}
const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body
    console.log(req.body);
    try {
        const userExists = await User.findOne({ email })

        if (userExists) {
            res.status(400);
            throw new Error('User Already Exists')
        }
        const user = await User.create({ name, email, password });
        if (user) {
            generateToken(res, user._id);
            return res.status(201).json({ _id: user._id, name: user.name, email: user.email, message: "User Registered" });

        } else {
            res.status(400);
            throw new Error("Invalid User Data")
        }
    } catch (err) {
        next(err);
    }
}
const logOutUser = async (req, res, next) => {
    try {
        res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) })
        return res.status(200).json({ message: "User Logged Out " })
    } catch (err) {
        next(err);
    }
}
const getUserProfile = async (req, res, next) => {
    const user = { _id: req.user._id, name: req.user.name, email: req.user.email }
    try {
        res.status(200).json({ user: user, message: "User Profile" })
    } catch (err) {
        next(err);
    }
}
const updateUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;

            if (req.body.password) {
                user.password = req.body.password;
            }
            const updatedUser = await user.save();
            return res.status(200).json({ _id: updatedUser._id, name: updatedUser.name, email: updatedUser.email, message: "User Registered" });

        } else {
            res.status(400);
            throw new Error("User not found")
        }
    } catch (err) {
        next(err);
    }
}
export { authUser, registerUser, getUserProfile, updateUserProfile, logOutUser };