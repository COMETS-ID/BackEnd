import Users from "../models/UserModel.js";
import argon2 from "argon2"

// testing 
export const first = async(req, res) =>{
    res.send('Berhasil Connect');
}

export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll({
            attributes: ['uuid','id','username','email','no_hp','role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// Get one user
export const getUserById = async(req, res) =>{
    try {
        const response = await Users.findOne({
            attributes: ['uuid','username','email','no_hp','role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// Create user
export const createUser = async(req, res) =>{
    const {username,email,password,confPassword,role,}= req.body
    if(password !== confPassword) return res.status(400).json({msg : "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);

    try {
        await Users.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg :"Register Berhasil"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// start update user
export const updateUser = async(req, res) =>{
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    const {username, email, no_hp, password, confPassword, role}= req.body
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg : "Password dan Confirm Password tidak cocok"});
    try {
        await Users.update({
            username: username,
            email: email,
            no_hp: no_hp,
            password: hashPassword,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg :"User Updated"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// Delete user
export const deleteUser = async(req, res) =>{
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    try {
        await Users.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg :"User Deleted"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }  
}