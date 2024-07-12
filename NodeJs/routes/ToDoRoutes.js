import { Router } from "express";
import { Create, Read, getSingleNote, updateNote, deleteNote } from "../controller/ToDoController.js";
const router = Router();
router.route("/toDo").post(Create);
router.route("/toDo").get(Read);
router.route("/toDo/:id").get(getSingleNote);
router.route("/toDo/:id").patch(updateNote);
router.route("/toDo/:id").delete(deleteNote);

export default router;
