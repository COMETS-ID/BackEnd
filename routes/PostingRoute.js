import express from "express";
import {
    getPosting,
    createPosting,
    deletePosting
} from "../controllers/Posting.js"
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/Posting', verifyToken,  getPosting);
router.post('/Posting/',verifyToken, createPosting);
router.delete('/Posting/:id',verifyToken, deletePosting);

export default router;