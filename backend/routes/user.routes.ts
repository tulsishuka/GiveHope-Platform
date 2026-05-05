
import { Router } from "express";
import { protectedMiddleware } from "../middlewares/authMiddleware";
import { getDashboard, getMe } from "../controllers/userController";
import { checkSubscription } from "../middlewares/checkSubscription";


const router = Router();

router.get(
  "/me",
  protectedMiddleware,
  getMe
);

router.get(
  "/dashboard",
  protectedMiddleware,
  checkSubscription,
  getDashboard
);

export default router;