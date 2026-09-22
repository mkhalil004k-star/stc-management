import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name:"tqyddntb",
  api_key: "427517873853914",
  api_secret:"gwEN7koUuW8paslsSaYSDKWdSXI",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "uploads",
  },
});

const upload = multer({ storage });

export default upload;