import { body, validationResult } from 'express-validator';
import { prisma } from '../lib/prisma.js';

const validatePost = [
    body("title")
        .trim()
        .isLength({ min: 1 }).withMessage("Titles must have at leats 1 character")
        .isLength({ max: 100 }).withMessage("The maximum title length is 100 characteres"),
    body("content")
        .trim()
        .isLength({ min: 1 }).withMessage("Content must have at leats 1 character")
        .isLength({ max: 10000 }).withMessage("The maximum content length is 10000 characteres")
];

const makePost = [
    validatePost,
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }

        if (!req.user || !req.user.admin)
            return res.status(401).send({ success: false, message: "Unauthorized." });

        const { title, content } = req.body;

        try {
            const result = await prisma.posts.create({
                data: {
                    title: title,
                    content: content,
                    ownerId: req.user.id,
                    published:false
                }
            });

            return res.status(201).send({ success: true, data: result });
        } catch (error) {
            console.log(error);
        }
    }
];

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAllPosts(req, res) {

    let includePublished = { published: true };
    if (req.user && req.user.admin) {
        includePublished = {};
    }
    try {
        const posts = await prisma.posts.findMany({
            where: {...includePublished },
            include: { owner: { select: { username: true } } },
            orderBy: { posted_at: 'desc' }
        });
        console.log(posts)
        return res.status(200).send({ success: true, data: posts });
    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getPostById(req, res) {
    const postId = parseInt(req.params.id);

    if (Number.isNaN(postId))
        return res.status(400).send({ success: false, message: "Invalid post id." });

    try {
        const result = await prisma.posts.findUnique({
            where: {
                id: postId
            },
            include: { owner: { select: { username: true } } }
        });

        return res.status(200).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}

const updatePostById = [
    validatePost,
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }


        if (!req.user || !req.user.admin)
            return res.status(401).send({ success: false, message: "Unauthorized." });

        const postId = parseInt(req.params.id);

        if (Number.isNaN(postId))
            return res.status(400).send({ success: false, message: "Invalid post id." });

        const post = await prisma.posts.findUnique({ where: { id: postId } });

        if (post.ownerId != req.user.id)
            return res.status(400).send({ success: false });

        const { title, content } = req.body;

        Object.assign(post, { title: title, content: content });

        try {
            const result = await prisma.posts.update({
                where: {
                    id: postId,
                },
                data: {
                    title: post.title,
                    content: post.content
                }
            });

            return res.status(200).send({ success: true, content: result });
        } catch (error) {
            console.log(error);
        }
    }
];

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function removePostById(req, res) {
    if (!req.user || !req.user.admin)
        return res.status(401).send({ success: false, message: "Unauthorized." });

    const postId = parseInt(req.params.id);

    if (Number.isNaN(postId))
        return res.status(400).send({ success: false, message: "Invalid post id." });

    try {
        const result = await prisma.posts.delete({
            where: {
                id: postId,
            }
        });

        return res.status(200).send({ success: true });
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function changePublishedStatus(req, res) {
    if (!req.user || !req.user.admin)
        return res.status(401).send({ success: false, message: "Unauthorized." });

    const postId = parseInt(req.params.id);
    const { status } = req.body;

    try {
        const result = await prisma.posts.update({
            where: { id: postId },
            data: { published: status }
        });

        return res.status(200).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}




export {
    makePost,
    getAllPosts,
    getPostById,
    updatePostById,
    removePostById,
    changePublishedStatus
}