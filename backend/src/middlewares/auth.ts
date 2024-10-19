import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
	namespace Express {
		interface Request {
			clerkId: string;
		}
	}
}

// Middleware Function to decode jwt token to get userId.
export const verifyJwtToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { authorization } = req.headers;

		if (!authorization || !authorization.startsWith("Bearer")) {
			res.status(400).json({
				success: false,
				message: "Not Authorized Login Again",
			});

			return;
		}

		const token = authorization.split(" ")[1];
		const decoded = jwt.decode(token) as jwt.JwtPayload;

		req.clerkId = decoded.userId;

		console.log(req.clerkId);
		

		next();
	} catch (error: any) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
