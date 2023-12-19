import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js"

import UserRoute from "./routes/UserRoute.js";
import AssesmentRoute from "./routes/AssesmentRoute.js";
import PostingRoute from "./routes/PostingRoute.js";
import CommentRoute from "./routes/CommentRoute.js";
import RoomRoute from "./routes/RoomRoute.js";
import UserRoomRoute from "./routes/UserRoomRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();
const app = express();

// // ----create db
// (async()=> {
//     await db.sync();
// })();


app.use(cookieParser());
app.use(express.json());
app.use(UserRoute);
app.use(AssesmentRoute);
app.use(PostingRoute);
app.use(CommentRoute);
app.use(RoomRoute);
app.use(UserRoomRoute);
app.use(AuthRoute);

app.listen(5000, ()=> console.log('Server running at port 5000'));