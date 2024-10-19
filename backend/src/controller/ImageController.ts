import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import User from "../models/user";
import { Request, Response } from "express";

// Controller function to remove background from image.
const removeBgImage = async (req: Request, res: Response) => {
	try {
		const clerkId = req.clerkId;
		const user = await User.findOne({ clerkId });

		if (!user) {
			res.status(400).json({
				message: "Something went wrong",
			});

			return;
		}

		if (user.creditBalance === 0) {
			res.status(200).json({
				message: "No credit balance",
				creditBalance: user.creditBalance,
			});

			return;
		}

		const { path: imagePath, mimetype } = req.file as Express.Multer.File;

		// Reading the image file
		const imageFile = fs.createReadStream(imagePath);

		const formData = new FormData();
		formData.append("image_file", imageFile);

		const { data } = await axios.post(
			"https://clipdrop-api.co/remove-background/v1",
			formData,
			{
				headers: {
					"x-api-key": process.env.CLIPDROP_API_KEY,
				},
				responseType: "arraybuffer",
			}
		);

		const base64Image = Buffer.from(data, "binary").toString("base64");
		const resultImage = `data:${mimetype};base64,${base64Image}`;

		await User.findByIdAndUpdate(user._id, {
			creditBalance: user.creditBalance - 1,
		});

		res.status(200).json({
			resultImage,
			creditBalance: user.creditBalance - 1,
			message: "Background Removed",
		});
	} catch (error: any) {
		console.log(error);
		res.status(500).json({
			message: "Something went wrong",
		});
	}
};

export default {
	removeBgImage,
};
