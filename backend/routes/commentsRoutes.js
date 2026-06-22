import { Router } from "express"
import passport from "passport";
import { getAllComments, getCommentById, removeCommentById, updateCommentById } from "../controllers/commentsController.js";

const commentsRouter = Router();

function tempFunct() { }

commentsRouter.get("/", passport.authenticate('jwt', { session: false }), getAllComments);
commentsRouter.get("/:id", passport.authenticate('jwt', { session: false }), getCommentById);
commentsRouter.put("/:id", passport.authenticate('jwt', { session: false }), updateCommentById);
commentsRouter.delete("/:id", passport.authenticate('jwt', { session: false }), removeCommentById);



export default commentsRouter;