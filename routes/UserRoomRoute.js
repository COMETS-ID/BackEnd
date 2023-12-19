import express from "express";
import {
    getUserByRoom,
    addUserRoom,
    deleteUserRoom
} from "../controllers/UserRoom.js"
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/User/Room/:id', verifyToken, getUserByRoom);
router.post('/User/Room/:id', verifyToken, addUserRoom);
router.delete('/User/Room/:id', verifyToken, deleteUserRoom);

export default router;