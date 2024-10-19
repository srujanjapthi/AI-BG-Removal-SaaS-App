import multer from "multer";

// Creating multer middleware for parsing form-data
const storage = multer.diskStorage({
	filename: (re, file, callback) => {
		callback(null, `${Date.now()}_${file.originalname}`);
	},
});

export const upload = multer({ storage: storage });
