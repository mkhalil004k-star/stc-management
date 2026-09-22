import express from "express";
import projectModel from "../models/project.Model.js";
import upload from "../middleware/multer.middleware.js"

let routes = express.Router();





routes.post("/createProject", upload.single("image"), async (req, res) => {

    let projectData = await projectModel.create({
        ...req.body,
        imageUrl: req.file.path
    })

    if (projectData) {
        return res.json({
            success: true,
            message: "The project is created successfully"
        })
    } else {
        return res.json({
            success: false,
            message: "Failed to create project"
        })
    }

})





routes.get("/getALLProjects", async function (req, res) {

    let allProject = await projectModel.find();

    return res.json({
        success: true,
        message: "The api is working",
        data: allProject
    });

});

routes.post("/getOneProject", async function (req, res) {

    let projectData = await projectModel.findOne({
        _id: req.body.id
    });
    if (projectData) {
        return res.json({
            success: true,
            message: "The project is found successfully",
            data: projectData
        });
    } else {
        return res.json({
            success: false,
            message: "Failed to find project"
        });
    }
});




routes.post("/deleteProject", async function (req, res) {
    let projectData = await projectModel.findOneAndDelete({ _id: req.body.id })
    if (projectData) {
        return res.json({ success: true, message: "The project is deleted successfully" })

    } else {
        return res.json({ success: false, message: "Failed to delete project" })
    }

})



routes.post("/updateProject", async function (req, res) {

    let projectData = await projectModel.findOneAndUpdate(
        { _id: req.body.id },
        {
            name: req.body.name,
            customerName: req.body.customerName,
            noets: req.body.noets,

            ...(req.body.imageUrl && {
                imageUrl: req.body.imageUrl
            })
        },
        { new: true }
    );
    if (projectData) {
        return res.json({
            success: true,
            message: "The project is updated successfully"
        });

    } else {
        return res.json({
            success: false,
            message: "Failed to update project"
        });
    }
});




export default routes;