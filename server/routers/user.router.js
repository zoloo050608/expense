import { Router } from "express";
import { SignUp } from "../controllers/users/sign-up.controller.js";
import { Login } from "../controllers/users/login.controllor.js";
import { testController } from "../controllers/users/test.js";

const userRouter = Router();

userRouter.route("/user/signup").post(SignUp);
userRouter.route("/user/login").post(Login);
userRouter.route("/user/dbtest").post(testController);
userRouter.route("/user/dbtest").get(testController);
export default userRouter;
