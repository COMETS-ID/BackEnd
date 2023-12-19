import Comment from "../models/CommentModel.js";
import User from "../models/UserModel.js"
import Posting from "../models/PostingModel.js";
import { Op } from "sequelize";

// Get Comment By Posting
export const getCommentByIdPosting = async(req, res) =>{
    try {
        const postingId = req.params.id;

        const posting = await Posting. findOne({
            where: {
                uuid: postingId
            },
            include: [{
                model: User,
                attributes: ['id','username', 'email']
            }]
        });
        
        if(!posting) return res.status(404).json({msg : "Postingan tidak ditemukan"})

        const comment = await Comment.findAll({
                where: {
                    postingId: posting.id
                },
                attributes:['uuid','id','comment'],
                include: [{
                    model: User,
                    attributes: ['id','username']
                }]
            });
        res.status(200).json({posting, comment});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Create Comment On Posting
export const createComment = async(req, res) =>{
    try {
        const postingId = req.params.id;
        const {comment} = req.body;
        const posting = await Posting.findOne({
            where: {
                uuid: postingId
            }
        });
        if(!posting) return res.status(404).json({msg : "Postingan tidak ditemukan"});
        
        await Comment.create({
            comment: comment,
            userId: req.userId,
            postingId : posting.id
        });
        res.status(201).json({msg: "Comment Created Succesfully"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Delete Comment
export const deleteComment = async(req, res) =>{
    try {
        const comment = await Comment.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if(!comment) return res.status(404).json({msg : "Comentar tidak ditemukan"})

        const posting = await Posting.findOne({
            where: {
                id: comment.postingId
            }
        });

        if(req.role === "admin"){
            await Comment.destroy({
                where: {
                    id: comment.id
                }
            });
        }else{
            if(req.userId !== comment.userId && req.userId !== posting.userId) {return res.status(403).json({msg: "Akses Terlarang"})}
            await Comment.destroy({
                where:{
                    id: comment.id
                }
            });
        }
        res.status(200).json({msg: "Comment Deleted Succesfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}