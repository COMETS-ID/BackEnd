import Posting from "../models/PostingModel.js";
import User from "../models/UserModel.js"
import { Op } from "sequelize";

// Get All Postingan
export const getPosting = async(req, res) =>{
    try {
        let response = await Posting.findAll({
                attributes:['uuid','id','posting'],
                include: [{
                    model: User,
                    attributes: ['id','username', 'email']
                }]
            });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Create Postingan
export const createPosting = async(req, res) =>{
    const {posting} = req.body;
    // console.log(req.user);
    try {
        await Posting.create({
            posting: posting,
            userId: req.userId
        });
        res.status(201).json({msg: "Postingan Berhasil Dibuat"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    } 
}

// Delete Postingan
export const deletePosting = async(req, res) =>{
    try {
        const postingan = await Posting.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!postingan) return res.status(404).json({msg : "Postingan tidak ditemukan"})
        if(req.role === "admin"){
            await Posting.destroy({
                where: {
                    id: postingan.id
                }
            });
        }else{
            if(req.userId !== postingan.userId) return res.status(403).json({msg: "Kamu Tidak Memiliki Akses"})
            await Posting.destroy({
                where:{
                    [Op.and]:[{id: postingan.id}, {userId: req.userId}]   
                }
            });
        }
        res.status(200).json({msg: "Product Deleted Succesfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}