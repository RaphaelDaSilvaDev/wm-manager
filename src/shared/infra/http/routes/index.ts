import { Router } from "express";
import { clientRoute } from "./client.routes";
import { paymenteRoute } from "./payment.routes";
import { planRoute } from "./plans.routes";
import { userRoute } from "./user.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/client", clientRoute);
router.use("/plan", planRoute);
router.use("/payment", paymenteRoute);

router.put("/webhook(/pix)?", (request, response) => {
  console.log(request.body);
  response.status(200).send();
});

export { router };
