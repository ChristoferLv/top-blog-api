import { Router } from "express"
import passport from "passport";

const commentsRouter = Router();

function tempFunct() { }

commentsRouter.get("/", passport.authenticate('jwt', { session: false }), tempFunct);
commentsRouter.get("/:id", passport.authenticate('jwt', { session: false }), tempFunct);
commentsRouter.put("/:id", passport.authenticate('jwt', { session: false }), tempFunct);
commentsRouter.delete("/:id", passport.authenticate('jwt', { session: false }), tempFunct);



export default commentsRouter;