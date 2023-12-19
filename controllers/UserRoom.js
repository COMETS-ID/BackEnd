import UserRoom from "../models/UserRoomModel.js";
import Room from "../models/RoomModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

// Get User By Room ( mengambil semua user dari satu room)
export const getUserByRoom = async(req, res) =>{
    try {
        const roomId = req.params.id;

        const room = await Room.findOne({
            attributes:['uuid','id','name','capacity', 'owner'],
            where: {
                uuid: roomId
            },
            include: [{
                model: Users,
                attributes: ['username']
            }]
        });

        if(!room) return res.status(404).json({msg : "Room tidak ditemukan"});

        
        const userRoom = await UserRoom.findAll({
            where: {
                roomId: room.id
            },
            attributes: ['uuid','id','roleRoom','val','userId', 'roomId'],
            include: [{
                model: Users,
                attributes: ['uuid','id','username']
            }]

        });

        res.status(200).json({room, userRoom});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Create User Room
export const addUserRoom = async (req, res) =>{
    const {userId} = req.body;
    try {
        const roomId = req.params.id
        const room = await Room.findOne({
            where:{
                uuid: roomId
            }
        }) ;
        if(!room) return res.status(404).json({msg : "Room Tidak Di Temukan"});

        const user = await Users.findOne({
            where: {
                uuid: userId
            }
        });
        if (!user) return res.status(404).json({ msg: "userId tidak valid" });
        

        if (req.userId !== room.owner) return res.status(403).json({msg :"anda tidak memiliki akses"})
        const role = "user";
        const val = 1;
        const addUserRoom = await UserRoom.create({
            roleRoom: role,
            val: val,
            userId: user.id,
            roomId: room.id,
        });
        if (!addUserRoom) return res.status(200).json({ msg: "userId tidak valid" });

        res.status(200).json({msg: "Penambahan userRoom berhasil"}, );
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Delete User
export const deleteUserRoom = async(req, res) =>{
    try {
        const userRoom = await UserRoom.findOne({
            where:{
                uuid: req.params.id
            }
        });

        if(!userRoom) return res.status(404).json({msg: "User Tidak Di Temukan"});

        const room = await Room.findOne({
            where:{
                 id : userRoom.roomId
            }
        });

        if(!room) return res.status(403).json({msg :"Room dari user sudah tidak ada"});

         if(req.role ==="admin"){
            await UserRoom.destroy({
                where:{
                    id: userRoom.id
                }
            })
         }else{
            if(req.userId !== room.owner) return res.status({msg :"Akses Terlarang"})
            await UserRoom.destroy({
                where:{
                    id: userRoom.id
                }
            })
         }

         res.status(200).json({msg: "Anggota Berhasil Di Hapus.."});

    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
