import 'dotenv/config';
import { join } from "node:path";
import express, { json, urlencoded } from "express";
import { passport } from "./authUtils.js";
import authRouter from "./routes/authRoutes.js";
import { prisma } from "./lib/prisma.js";
import postsRouter from './routes/postsRoutes.js';
import commentsRouter from './routes/commentsRoutes.js';
const dir = import.meta.dirname;
const assetsPath = join(dir, "public");


const app = express();
app.set("views", join(dir, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(json());

app.use("/auth", authRouter)
app.use("/posts", postsRouter)
app.use("/comments", commentsRouter)

app.get("/protected", passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send({ text: "YAY! this is a protected Route", content: req.user });
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.status || 500;
  console.log(err)
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("app listening on port 3000!");
  console.log("http://localhost:3000");
});

/*
POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
    */