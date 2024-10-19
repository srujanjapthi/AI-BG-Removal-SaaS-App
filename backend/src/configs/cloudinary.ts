import { v2 as cloudinary } from "cloudinary";

export const setupCloudinary = () => {
	cloudinary.config({
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	});
};
