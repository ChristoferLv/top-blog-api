import { body, matchedData, validationResult } from 'express-validator';
import { prisma } from '../lib/prisma.js';


const validateComment = [
    body("content")
        .trim()
        .isLength({ min: 2 }).withMessage("Comment must have at leats 2 characteres")
        .isLength({ max: 500 }).withMessage("The maximum comment length is 500 characteres")
];

const makeComment = [
    validateComment,
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }

        if (!req.user)
            return res.status(401).send({ success: false, message: "User not logged in." });

        const postId = parseInt(req.params.postId);

        const post = await prisma.posts.findUnique({ where: { id: postId } });

        if (!post)
            return res.status(400).send({ success: false, message: "Invalid post id." });

        const { content } = matchedData(req);

        try {
            const result = await prisma.comments.create({
                data: {
                    content: content,
                    ownerId: req.user.id,
                    postId: postId
                }
            });

            return res.status(201).send({ success: true, post: result });
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
async function getAllComments(req, res) {
    if (!req.user || !req.user.admin)
        return res.status(401).send({ success: false, message: "Unauthorized." });

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
    const postId = parseInt(req.params.postId);
    const userId = (req.user != undefined ? req.user.id : -1);
    try {
        const comments = await prisma.$queryRawUnsafe(
            `SELECT comments.*, (CASE WHEN comments."ownerId" = $2 THEN 1 ELSE 0 END) AS fromUser, users.username 
            FROM comments LEFT JOIN users ON comments."ownerId" = users.id 
            WHERE comments."postId" = $1 
            ORDER BY fromUser DESC, comments.posted_at DESC`,
            postId, userId)
        // const comments = await prisma.comments.findMany({
        //     where: {
        //         postId: postId
        //     },
        //     include: { owner: { select: { username:true } } },
        //     orderBy:{posted_at:'desc'}
        // });

        return res.status(200).send({ success: true, data: comments });
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
    if (!req.user || !req.user.admin)
        return res.status(401).send({ success: false, message: "Unauthorized." });

    const commentId = parseInt(req.params.id);

    if (Number.isNaN(commentId))
        return res.status(400).send({ success: false, message: "Invalid comment id." });

    try {
        const result = await prisma.comments.findUnique({
            where: {
                id: commentId
            }
        });

        if (!result)
            return res.status(404).send({ success: false, message: "Comment not found." })

        return res.status(200).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}

const updateCommentById = [
    validateComment,
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }


        if (!req.user)
            return res.status(401).send({ success: false, message: "User not logged in." });

        const commentId = parseInt(req.params.id);

        if (Number.isNaN(commentId))
            return res.status(400).send({ success: false, message: "Invalid comment id." });

        const comment = await prisma.comments.findUnique({ where: { id: commentId } });

        if (comment.ownerId != req.user.id)
            return res.status(400).send({ success: false, message: "Unauthorized." });

        const { content } = matchedData(req);

        Object.assign(comment, { content });

        try {
            const result = await prisma.comments.update({
                where: {
                    id: commentId,
                },
                data: {
                    content: comment.content
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
async function removeCommentById(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const commentId = parseInt(req.params.id);

    if (Number.isNaN(commentId))
        return res.status(400).send({ success: false, message: "Invalid comment id." });

    const comment = await prisma.comments.findUnique({ where: { id: commentId } });

    if (!req.user.admin && (comment.ownerId != req.user.id))
        return res.status(400).send({ success: false, message: "Unauthorized." });

    try {
        const result = await prisma.comments.delete({
            where: {
                id: commentId
            }
        });

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
    updateCommentById,
    removeCommentById
}