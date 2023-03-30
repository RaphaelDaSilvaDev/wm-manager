import { Router } from "express";
import { CreatePaymentController } from "../../../../modules/Payments/useCase/CreatePayment/CreatePaymentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const paymenteRoute = Router();

const createPaymentController = new CreatePaymentController();

paymenteRoute.post("/", ensureAuthenticated, createPaymentController.handle);

export { paymenteRoute };
