import { Router } from "express"
import passport from "passport";

const postsRouter = Router();

function tempFunct() { }

postsRouter.post("/", passport.authenticate('jwt', { session: false }), tempFunct);
postsRouter.get("/", passport.authenticate('jwt', { session: false }), tempFunct);
postsRouter.get("/:id", passport.authenticate('jwt', { session: false }), tempFunct);
postsRouter.put("/:id", passport.authenticate('jwt', { session: false }), tempFunct);
postsRouter.delete("/:id", passport.authenticate('jwt', { session: false }), tempFunct);

postsRouter.post("/:postId/comments", passport.authenticate('jwt', { session: false }), tempFunct);
postsRouter.get("/:postId/comments", passport.authenticate('jwt', { session: false }), tempFunct);




export default postsRouter;