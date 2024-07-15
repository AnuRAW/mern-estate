import express from "express";
import { test, updateUser } from "../controller/user.control.js";
import { verifyToken } from "../Utils/verifiy.js";

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)

export default router;

