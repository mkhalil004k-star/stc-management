import express from "express"
import multer from "multer"

import {
    createMember,
    findAllMember,
    deleteMember
} from "../controllers/member.controllers.js"

let memberrouter = express.Router()

let upload = multer({ dest: "uploads/" })

memberrouter.post(
    "/memberCreate",
    upload.single("image"),
    createMember
)

memberrouter.get(
    "/allMember",
    findAllMember
)

memberrouter.post("/deleteMember", deleteMember)

export default memberrouter