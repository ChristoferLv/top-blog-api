import bcrypt from 'bcryptjs';
import { db } from "../db/pools.js";
import { body, matchedData, validationResult } from "express-validator";
import { prisma } from '../lib/prisma.js';
import jwt from 'jsonwebtoken';

const validateNewUser = [
    body("username").matches(/^[a-zA-Z0-9\s\-.]+$/).withMessage("Username can only contain letters, numbers, space, - and .")
        .trim()
        .isLength({ min: 3 }).withMessage("Username must have at leats 3 characteres")
        .isLength({ max: 30 }).withMessage("The maximum username length is 30")
        .toLowerCase()
        .custom(async value => {
            const exists = await checkUsernameUsed(value);
            if (exists)
                throw new Error('Username already in use');
            return true;
        }).withMessage("Username is already in use"),
    body("password").trim().isLength({ min: 3 }).withMessage("Password must have at leats 3 characteres").isLength({ max: 50 }).withMessage("The maximum password length is 50"),
    body('confirmPassword').custom((value, { req }) => {
        return value === req.body.password;
    }).withMessage("Password fields must match"),
];

async function getMe(req, res) {
    if (req.user)
        return res.json({ success: true, data: req.user });
    return res.status(400).json({ success: false, data: undefined });
}

async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await prisma.users.findUnique({ where: { username: username } });

        if (!user) {
            return res.json({ success: false, message: "Wrong credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.json({ success: false, message: "Wrong credentials" });
        }

        const payload = { id: user.id, username: user.username, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.json({
            success: true,
            token: `Bearer ${token}`
        });
    } catch (err) {
        console.log(err)
    }
}

async function register(req, res) {
    console.log(req.body)
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.users.create({ data: { email, password: hashedPassword, username } });


    res.json({
        result: result,
        success: true,
    });
}

function logout(req, res, next) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            res.redirect("/");
        });
    });
}

export {
    getMe,
    login,
    register,
    logout,
}