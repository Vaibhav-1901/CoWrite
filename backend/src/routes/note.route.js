import { Router } from "express";
import { createNote, getAllNotes, editNote, deleteNote, getSingleNote, getSessionNotes } from "../controllers/note.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const noteRouter = Router();
noteRouter.route("/create").post( verifyJWT, createNote);
noteRouter.route("/user/:userId").get(getAllNotes);
noteRouter.route("/note/:id").get(getSingleNote);
noteRouter.route("/edit/:id").put(editNote);
noteRouter.route("/delete/:id").delete(deleteNote);
noteRouter.route("/session/:sessionId").get(getSessionNotes);

export default noteRouter
