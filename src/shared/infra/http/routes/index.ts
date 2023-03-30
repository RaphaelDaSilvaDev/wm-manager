import { Router } from "express";
import { clientRoute } from "./client.routes";
import { planRoute } from "./plans.routes";
import { userRoute } from "./user.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/client", clientRoute);
router.use("/plan", planRoute);

export { router };
