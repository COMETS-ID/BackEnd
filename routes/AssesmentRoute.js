import express from "express";
import {
    getAssesments,
    createAssesment,
    deleteAssesment,
    assesmentFromUserRoom,
    assesmentUserRoom
} from "../controllers/Assesment.js"
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/Assesments', verifyToken, getAssesments);
router.post('/Assesment', verifyToken, createAssesment);
router.delete('/Assesment/:id', verifyToken, deleteAssesment);
router.get('/Assesment/UserRoom/:id', verifyToken, assesmentFromUserRoom);
router.post('/Assesment/UserRoom/:id', verifyToken, assesmentUserRoom);

export default router;