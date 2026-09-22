import express from "express"
import cors from "cors"
import dbConnection from "./database/dbConnection.js"
import authRoutes from "./routes/auth.route.js"
import projectRoutes from "./routes/project.route.js"
import memberRoutes from "./routes/member.route.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv";

dotenv.config();
let app = express()

dbConnection()
app.use("/uploads", express.static("uploads"))
app.use(cookieParser())

app.use(cors({
   origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/projects", projectRoutes)
app.use("/members", memberRoutes)

app.listen(5000, function () {
    console.log("The server is runing on 5000")
})