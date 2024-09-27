import { Router } from "express";
import { SignUp } from "../controllers/users/sign-up.controller.js";
import { Login } from "../controllers/users/login.controllor.js";

const userRouter = Router();

userRouter.route("/user/signup").post(SignUp);
userRouter.route("/user/login").post(Login);

export default userRouter;
