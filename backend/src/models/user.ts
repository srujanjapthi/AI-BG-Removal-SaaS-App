import mongoose from "mongoose";

export type UserSchemType = {
	userId: string;
	email: string;
	photo: string;
	firstName: string;
	lastName: string;
	creditBalance?: number;
};

const userSchema = new mongoose.Schema<UserSchemType>({
	userId: {
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

const User = mongoose.models.user || mongoose.model("User", userSchema);
export default User;
