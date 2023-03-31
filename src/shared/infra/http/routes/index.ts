import { Router } from "express";
import { clientRoute } from "./client.routes";
import { paymenteRoute } from "./payment.routes";
import { planRoute } from "./plans.routes";
import { userRoute } from "./user.routes";
import { webhookRoute } from "./webhook.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/client", clientRoute);
router.use("/plan", planRoute);
router.use("/payment", paymenteRoute);
router.use("/webhook(/pix)?", webhookRoute);

export { router };
