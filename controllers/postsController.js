import { prisma } from '../lib/prisma.js';

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function makePost(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const { title, content } = req.body;

    try {
        const result = await prisma.posts.create({
            data: {
                title:title,
                content: content,
                ownerId: req.user.id
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
async function getAllPosts(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    try {
        const posts = await prisma.posts.findMany({
            where: {
                ownerId: req.user.id
            }
        });

        return res.status(200).send({ success: true, posts: posts });
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
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const postId = parseInt(req.params.id);

    if (Number.isNaN(postId))
        return res.status(400).send({ success: false, message: "Invalid post id." });

    try {
        const result = await prisma.posts.findUnique({
            where: {
                id: postId
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
async function removePostById(req, res) {
    if (!req.user)
        return res.status(401).send({ success: false, message: "User not logged in." });

    const postId = parseInt(req.params.id);

    if (Number.isNaN(postId))
        return res.status(400).send({ success: false, message: "Invalid post id." });

    try {
        const result = await prisma.posts.delete({
            where: {
                id: postId,
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
    makePost,
    getAllPosts,
    removePostById,
    removePostById
}