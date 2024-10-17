import express from "express";
import { clerkWebhooks } from "../controller/MyUserController";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);

export default userRouter;
