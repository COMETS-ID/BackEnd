import express from "express";
import {
    first,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js"
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/', first);
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/users/',  createUser);
router.patch('/users/:id',  verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

export default router;