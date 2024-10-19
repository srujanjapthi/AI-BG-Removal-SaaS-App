import express from "express";
import MyUserController from "../controller/MyUserController";
import { verifyJwtToken } from "../middlewares/auth";

const userRouter = express.Router();

userRouter.post("/webhooks", MyUserController.clerkWebhooks);

userRouter.get("/credits", verifyJwtToken, MyUserController.userCredits);

export default userRouter;
