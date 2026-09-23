import memberModel from '../models/member.model.js'



async function createMember(req, res) {

    let { name, phoneNo, post, address } = req.body

    let saveData = {
        name,
        phoneNo,
        post,
        address,
        imageUrl: req.file.path
    }

    let memberData = await memberModel.create(saveData)

    if (memberData) {
        return res.json({
            success: true,
            message: "The member is created successfully"
        })
    } else {
        return res.json({
            success: false,
            message: "Failed to create member"
        })
    }
}


async function findAllMember(req, res) {

    let memberData = await memberModel.find()

    return res.json({
        success: true,
        message: "The api is working",
        data: memberData
    })
}


async function deleteMember(req, res) {

    let memberData = await memberModel.findOneAndDelete({ _id: req.body.id })

    return res.json({
        success: true,
        message: "The api is working",
        data: memberData
    })
}





export {
    createMember,
    findAllMember,
    deleteMember
}