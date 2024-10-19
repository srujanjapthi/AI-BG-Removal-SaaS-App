import express from "express";
import ImageController from "../controller/ImageController";
import { verifyJwtToken } from "../middlewares/auth";
import { upload } from "../middlewares/multer";

const router = express.Router();

router.post(
	"/remove-bg",
	upload.single("image"),
	verifyJwtToken,
	ImageController.removeBgImage
);

export default router;
