import Room from "../models/RoomModel.js";
import UserRoom from "../models/UserRoomModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

// Get All Rooms (mengambil semua room yang dimiliki user)
export const getRoom = async(req, res) =>{
    try {
        let response;
        if (req.role === "admin"){
            response = await UserRoom.findAll({
                attributes:['uuid', 'id', 'roleRoom', 'val'],
                include: [{
                    model: Room,
                    attributes:['uuid','id','name','capacity', 'owner'],
                    include: [{
                        model: Users,
                        attributes: ['uuid','id','username']
                    }]
                }]
            });
        }else{
            response = await UserRoom.findAll({
                where: {
                    userId : req.userId
                },attributes:['uuid', 'id', 'roleRoom', 'val'],
                include: [{
                    model: Room,
                    attributes:['uuid','id','name','capacity','owner'],
                    include: [{
                        model: Users,
                        attributes: ['uuid','id','username']
                    }]
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


// Create Room
export const createRoom = async(req, res) =>{
    const {name, capacity} = req.body;
    try {
        const newRoom = await Room.create({
            name: name,
            capacity: capacity, 
            owner: req.userId
        });

         const roomId = newRoom.id;
        
         const val = 1;
         const role = "admin";
         await UserRoom.create({
             roleRoom: role,
             val: val,
             userId: req.userId,
             roomId: roomId,
         });

        res.status(201).json({msg: "Room Created Succesfully"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Delete Room
export const deleteRoom = async(req, res) =>{
    try {
        const room = await Room.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!room) return res.status(404).json({msg : "Room tidak ditemukan"});

        const userRoom = await UserRoom.destroy({
            attributes:['uuid','roleRoom','userId'],
            where: {
                roomId : room.id
            }
        });

        const deleteRoom = await Room.destroy({
            where: {
                id: room.id
            }
        });

        if(req.role === "admin"){
            // userRoom;
            // return deleteRoom;
            res.status(200).json({msg: "Room Berhasil Di Hapus..",deleteRoom, userRoom});
            // console.log('berhasil hapus dari admin');
        }else{
            if(req.userId !== room.owner) return res.status(403).json({msg: "Akses Terlarang"});
            // userRoom;
            // return res.status(deleteRoom);
            // console.log('dihapus oleh owner room');
            res.status(200).json({msg: "Room Berhasil Di Hapus..",deleteRoom, userRoom});
        }
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
