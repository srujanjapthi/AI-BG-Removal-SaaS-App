import { Request, Response } from "express";
import { Webhook } from "svix";
import User from "../models/user";
import { WebhookEvent } from "@clerk/clerk-sdk-node";

// API Controller Function to Manage Clerk User with database
// http://localhost:3000/api/user/webhooks
export const clerkWebhooks = async (req: Request, res: Response) => {
	try {
		// Create a Svix instance with Clerk webhook secret
		const webhook = new Webhook(
			process.env.CLERK_WEBHOOK_SIGNING_SECRET as string
		);

		await webhook.verify(JSON.stringify(req.body), {
			"svix-id": req.headers["svix-id"] as string,
			"svix-timestamp": req.headers["svix-timestamp"] as string,
			"svix-signature": req.headers["svix-signature"] as string,
		});

		const { data, type }: WebhookEvent = req.body;

		switch (type) {
			case "user.created":
				console.log(data);

				const user = await User.create({
					clerkId: data.id,
					email: data.email_addresses[0].email_address,
					firstName: data.first_name! as string,
					lastName: data.last_name as string,
					photo: data.image_url,
				});

				console.log(user);

				res.json({ success: true, message: "User created" });
				break;

			case "user.updated":
				await User.findOneAndUpdate(
					{ clerkId: data.id },
					{
						email: data.email_addresses[0].email_address,
						firstName: data.first_name,
						lastName: data.last_name,
						photo: data.image_url,
					}
				);

				res.json({
					success: true,
					message: "User updated",
				});
				break;

			case "user.deleted":
				await User.findOneAndDelete({ clerkId: data.id });
				res.json({
					success: true,
					message: "User deleted",
				});
				break;

			default:
				res.status(400).json({
					success: false,
					message: "Unhandled event type",
				});
		}
	} catch (error: any) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

const userCredits = async (req: Request, res: Response) => {
	try {
		const clerkId = req.clerkId;
		const user = await User.findOne({ clerkId });

		if (!user) {
			res.status(400).json({
				message: "Something went wrong",
			});

			return;
		}

		res.json({
			success: true,
			credits: user.creditBalance,
		});
	} catch (error: any) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export default {
	clerkWebhooks,
	userCredits,
};
