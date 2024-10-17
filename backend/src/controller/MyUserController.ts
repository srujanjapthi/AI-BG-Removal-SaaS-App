import { Request, Response } from "express";
import { Webhook } from "svix";
import User, { UserSchemType } from "../models/user";

type WebhookType = {
	data: {
		id: string;
		email_addresses: {
			email_address: string;
		}[];
		first_name: string;
		last_name: string;
		image_url: string;
	};
	type: "user.created" | "user.updated" | "user.deleted";
};

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

		const { data, type }: WebhookType = req.body;

		switch (type) {
			case "user.created":
				const userData: UserSchemType = {
					userId: data.id,
					email: data.email_addresses[0].email_address,
					firstName: data.first_name,
					lastName: data.last_name,
					photo: data.image_url,
				};

				await User.create(userData);
				res.json({});

				break;

			case "user.updated":
				await User.findOneAndUpdate(
					{ userId: data.id },
					{
						email: data.email_addresses[0].email_address,
						firstName: data.first_name,
						lastName: data.last_name,
						photo: data.image_url,
					}
				);

				res.json({});

				break;

			case "user.deleted":
				await User.findOneAndUpdate({ userId: data.id });
				res.json({});

				break;
		}
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
};
