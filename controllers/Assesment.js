import Assesment from "../models/AssesmentModel.js";
import User from "../models/UserModel.js";
import UserRoom from "../models/UserRoomModel.js";
import Room from "../models/RoomModel.js";
import { Op } from "sequelize";


// Get all Assesment
export const getAssesments = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Assesment.findAll({
                attributes:['uuid', 'type','value','userRoomId','createdAt'],
                include: [{
                    model: User,
                    attributes: ['uuid', 'username', 'email', 'no_hp']
                }],
                // include: [{
                //     model: UserRoom,
                //     attributes: ['roomId'],
                //     include:[{
                //         model : Room,
                //         attributes:['name']
                //     }]
                // }]
            });
        }else{
            response = await Assesment.findAll({
                attributes:['uuid', 'type','value','userRoomId','createdAt'],
                where:{
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['uuid', 'username', 'email', 'no_hp']
                    },{
                    model: UserRoom,
                    attributes: ['roomId'],
                    include:[{
                        model : Room,
                        attributes:['name']
                    }],
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Add Assesment General
export const createAssesment = async(req, res) =>{
    const {type, value} = req.body;
    try {
        await Assesment.create({
            type: type,
            value: value,
            userId: req.userId
        });
        res.status(201).json({msg: "Berkas Berhasil Di Simpan"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }    
}

// Delete assesment
export const deleteAssesment = async(req, res) =>{
    try {
        const assesment = await Assesment.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!assesment) return res.status(404).json({msg : "Data tidak ditemukan"})
        if(req.role === "admin"){
            await Assesment.destroy({
                where: {
                    id: assesment.id
                }
            });
        }else{
            if(req.userId !== assesment.userId) return res.status(403).json({msg: "Akses Terlarang"})
            await Assesment.destroy({
                where:{
                    [Op.and]:[{id: assesment.id}, {userId: req.userId}]   
                }
            });
        }
        res.status(200).json({msg: "Berkas Berhasil Di Hapus.."});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// form assesment dari Room

// Get trafict history per user
export const assesmentFromUserRoom = async(req, res) =>{
    try {
        const userRoom = await UserRoom.findOne({
            where: {
                uuid: req.params.id
            }
        });

        // if(req.userId !== userRoom.userId) return res.status(403).json({msg: "Akses Terlarang"});
        
        const room = await Room.findOne({
            where:{
                id : userRoom.roomId
            },
            attributes:['id', 'name','owner'],
            // include:[{
            //     model:user,
            //     attributes:['name']
            // }]
        });
        
        const user = await User.findOne({
            where: {
                id: userRoom.userId
            },
            attributes:['username']
        });

        const assesment = await Assesment.findAll({
            where:{
                userRoomId : userRoom.id
            },
            attributes: ['uuid','id','type','value','userRoomId','createdAt','updatedAt']
        });
        res.status(201).json({room, user, assesment})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }    
}

// Add Assesment From UserRoom
export const assesmentUserRoom = async(req, res) =>{
    const {type, value} = req.body;
    try {
        const userRoom = await UserRoom.findOne({
            where: {
                uuid: req.params.id
            }
        })

        if(req.userId !== userRoom.userId) return res.status(403).json({msg: "Akses Terlarang"});
        
        await Assesment.create({
            type: type,
            value: value,
            userId: req.userId,
            userRoomId: userRoom.id
        });
        res.status(201).json({msg: "Berkas Berhasil Di Simpan"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }    
}