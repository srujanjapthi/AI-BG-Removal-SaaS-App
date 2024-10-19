import mongoose from "mongoose";

type UserSchemType = {
	clerkId: string;
	email: string;
	photo: string;
	firstName: string;
	lastName: string;
	creditBalance: number;
};

const userSchema = new mongoose.Schema<UserSchemType>({
	clerkId: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	photo: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	creditBalance: {
		type: Number,
		default: 5,
	},
});

const User = mongoose.model<UserSchemType>("User", userSchema);
export default User;
