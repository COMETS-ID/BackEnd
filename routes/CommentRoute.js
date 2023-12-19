import express from "express";
import {
    getCommentByIdPosting,
    createComment,
    deleteComment
} from "../controllers/Comment.js"
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/Comment/Posting/:id',verifyToken, getCommentByIdPosting);
router.post('/Comment/Posting/:id',verifyToken, createComment);
router.delete('/Comment/:id',verifyToken, deleteComment);

export default router;