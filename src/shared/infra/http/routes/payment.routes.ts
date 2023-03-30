import { Router } from "express";
import { CreatePaymentController } from "../../../../modules/Payments/useCase/CreatePayment/CreatePaymentController";
import { GetPaymentByIdController } from "../../../../modules/Payments/useCase/GetPaymentById/GetPaymentByIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const paymenteRoute = Router();

const createPaymentController = new CreatePaymentController();
const getPaymentByIdController = new GetPaymentByIdController();

paymenteRoute.post("/", ensureAuthenticated, createPaymentController.handle);
paymenteRoute.get("/:id", getPaymentByIdController.handle);

export { paymenteRoute };
