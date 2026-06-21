import { prisma } from '../lib/prisma.js';

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function makeComment(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const { content } = req.body;

    try {
        const result = await prisma.coments.create({
            data: {
                content: content,
                ownerId: req.user.id,
                postId: req.params.postId
            }
        });

        return res.status(201).send({ success: true, post: result });
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAllComments(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    try {
        const comments = await prisma.comments.findMany({
            where: {
                ownerId: req.user.id
            }
        });

        return res.status(200).send({ success: true, comments: comments });
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAllCommentsOfPost(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    try {
        const comments = await prisma.comments.findMany({
            where: {
                postId: req.params.postId
            }
        });

        return res.status(200).send({ success: true, comments: comments });
    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getCommentById(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const commentId = parseInt(req.params.id);

    if (Number.isNaN(commentId))
        return res.status(400).send({ success: false, message: "Invalid comment id." });

    try {
        const result = await prisma.comments.findUnique({
            where: {
                id: commentId
            }
        });

        return res.status(200).send({ success: true, post: result });
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function removeCommentById(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const commentId = parseInt(req.params.id);

    if (Number.isNaN(commentId))
        return res.status(400).send({ success: false, message: "Invalid comment id." });

    try {
        const result = await prisma.comments.delete({
            where: {
                id: commentId,
                ownerId: req.user.id
            }
        });

        console.log("on delete", result);

        return res.status(200).send({ success: true });
    } catch (error) {
        console.log(error);
    }
}




export {
    makeComment,
    getAllComments,
    getAllCommentsOfPost,
    getCommentById,
    removeCommentById
}