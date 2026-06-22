import { Router } from "express"
import passport from "passport";
import { getAllPosts, getPostById, makePost, removePostById, updatePostById } from "../controllers/postsController.js";
import { getAllCommentsOfPost, makeComment } from "../controllers/commentsController.js";

const postsRouter = Router();

function tempFunct() { }

postsRouter.post("/", passport.authenticate('jwt', { session: false }), makePost);
postsRouter.get("/", passport.authenticate('jwt', { session: false }), getAllPosts);
postsRouter.get("/:id", passport.authenticate('jwt', { session: false }), getPostById);
postsRouter.put("/:id", passport.authenticate('jwt', { session: false }), updatePostById);
postsRouter.delete("/:id", passport.authenticate('jwt', { session: false }), removePostById);

postsRouter.post("/:postId/comments", passport.authenticate('jwt', { session: false }), makeComment);
postsRouter.get("/:postId/comments", passport.authenticate('jwt', { session: false }), getAllCommentsOfPost);




export default postsRouter;