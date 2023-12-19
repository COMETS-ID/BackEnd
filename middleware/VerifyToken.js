import jwt from "jsonwebtoken";
import Token from "../models/TokenModel.js"
import User from "../models/UserModel.js"

export const verifyToken = async(req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    const [blacklist] = await Token.findAll({
        where: {
            token : token
        }
    });
    if(blacklist)return res.sendStatus(403);
    const jwtVerify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.email = jwtVerify.email;
        req.userId = jwtVerify.userId;
        req.uuid = jwtVerify.uuid;
        req.role = jwtVerify.role;
        console.log(jwtVerify);
        next();

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    //     if(err) return res.sendStatus(403);
    //     req.email = decode.email;
    //     req.userId = decode.id;
    //     req.uuid = decode.uuid;
    //     req.role = decode.role;
    //     next();
    // });
}

// export const adminOnly = async (req, res, next) =>{
//     const user = await User.findOne({
//         where: {
//             uuid: req.session.userId
//         }
//     });
//     if(!user) return res.status(404).json({msg :"User tidak ditemukan"});
//     if(user.role !== "admin")  return res.status(403).json({msg :"Akses Terlarang"});
//     next();
// }