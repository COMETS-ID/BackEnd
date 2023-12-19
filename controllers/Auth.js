import Users from "../models/UserModel.js"
import Token from "../models/TokenModel.js";
import argon2 from "argon2"
import jwt from "jsonwebtoken";

// Login function
export const Login =async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
        const match = await argon2.verify(user.password, req.body.password)
        if(!match) return res.status(400).json({msg: "Wrong Password"});
    
        const uuid = user.dataValues.uuid;
        const userId = user.dataValues.id;
        const role = user.dataValues.role;
        const email = user.dataValues.email;

        const accessToken = jwt.sign({uuid, userId, email, role}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '6h'
        });

        res.json({accessToken})
    } catch (error) {
        res.status(404).json(error)
    }
}

// function get user login
export const Me = async(req, res) =>{
    // if(!req.session.userId){
    //     return res.status(401).json({msg: "Mohon login ke akun Anda!"})
    // }
    // const user = await User.findOne({
    //     attributes:['uuid', 'id' ,'name', 'email', 'no_hp', 'role'],
    //     where: {
    //         uuid: req.session.userId
    //     }
    // });
    // if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    // res.status(200).json(user);
}

// Only Admin function
export const logOut = async(req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const rowCount = await Token.count();

    if (rowCount >= 50) {
      await Token.destroy({
        where: {},
        order: [["createdAt", "ASC"]],
        limit: 49,
      });
    }
    await Token.create({
        token: token
    });
        return res.sendStatus(200);
}