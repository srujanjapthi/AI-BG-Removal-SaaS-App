import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
	try {
		const MONGO_URI = process.env.MONGODB_CONNECTION_STRING as string;

		await mongoose.connect(MONGO_URI);

		if (process.env.NODE_ENV === "development") {
			console.log(
				"Connected to Database:",
				process.env.MONGODB_CONNECTION_STRING
			);
		}
	} catch (error: any) {
		console.error("Error Connecting to Database:\n", error);
		process.exit(1);
	}
};

export default connectDB;
