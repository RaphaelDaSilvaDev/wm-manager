import { Router } from "express";
import { clientRoute } from "./client.routes";
import { userRoute } from "./user.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/client", clientRoute);

export { router };
