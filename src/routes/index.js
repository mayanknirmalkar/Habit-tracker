import express from "express";
import { HomePage } from "../controllers/homeController.js";
import { addHabit, deleteHabit, changeHabitStatus } from "../controllers/habitController.js";

const router = express.Router();

router.get('/', HomePage);
router.post('/add', addHabit);
router.get('/delete', deleteHabit);
router.get('/changehabitstatus' , changeHabitStatus);

export default router;