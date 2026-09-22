import express from 'express';
import authModel from '../models/auth.Model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
let router = express.Router();


router.post('/registration', async function (req, res) {
  let data = req.body
  let hashPassword = await bcrypt.hash(data.password, 10)

  let myData = await authModel.create({
    name: data.name,
    email: data.email,
    role: data.role,
    password: hashPassword
  });

  let checkData = ({ id: myData._id, role: myData.role });
  let token = jwt.sign(checkData, 'mk')
  console.log(token, "The token is prasente.")

  res.cookie("stc-managemente", token)


  return res.json({

    success: true,
    message: 'The auth is successfully',

  })
})


router.post('/login', async function (req, res) {
  let dbData = await authModel.findOne({ email: req.body.email, role: req.body.role, })
  if (!dbData) {
    return res.json({ success: false, message: "The email and role is not found for same user" })
  }
  let hashPassword = dbData.password
  let normalPassword = req.body.password
  let result = await bcrypt.compare(normalPassword, hashPassword)


  if (result == false) {
    return res.json({
      success: false,
      message: 'The Password is not correct.',
    })
  } else {
    return res.json({ success: true, message: "You are login" })
  }
})



router.get("/adminCheckr", async (req, res) => {
  let token = req.cookies?.["stc-managemente"]
  if (!token) {
    return res.json({ success: false, massege: "The token is not presnte" })
  }
  try {
    let result = jwt.verify(token, "mk")
    if (!result) {
      return res.json({ success: true, massege: "The result is not comeing" })
    }
    if (result.role == "admin") {
      return res.json({ success: true, massege: "The admin is authorizing" })
    }
    return res.json({ success: true, massege: "The admin is not autorized beacuase not admin" })

  } catch {
    return res.json({ success: false, massage: "Create the error jwt token,you are not admin" })
  }
});



export default router