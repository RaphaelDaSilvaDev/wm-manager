import { Router } from "express";
import { ConfirmPaymentController } from "../../../../modules/Payments/useCase/ConfirmPayment/ConfirmPaymentController";

const webhookRoute = Router();

const confirmPaymentController = new ConfirmPaymentController();

webhookRoute.post("/", confirmPaymentController.handle);

export { webhookRoute };
