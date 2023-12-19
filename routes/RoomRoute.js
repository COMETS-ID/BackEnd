import express from "express";
import {
    getRoom,
    createRoom,
    deleteRoom
    // getRoomById,
} from "../controllers/Room.js"
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/Rooms',verifyToken, getRoom);
router.post('/Room/',verifyToken, createRoom);
router.delete('/Room/:id',verifyToken, deleteRoom);
// router.get('/Room/:id',verifyUser, getRoomById);

export default router;