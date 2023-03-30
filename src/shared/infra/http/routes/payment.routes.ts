import { Router } from "express";
import { CreatePaymentController } from "../../../../modules/Payments/useCase/CreatePayment/CreatePaymentController";
import { GeneretePixPaymentController } from "../../../../modules/Payments/useCase/GeneratePixPayment/GeneretePixPaymentController";
import { GetPaymentByIdController } from "../../../../modules/Payments/useCase/GetPaymentById/GetPaymentByIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const paymenteRoute = Router();

const createPaymentController = new CreatePaymentController();
const getPaymentByIdController = new GetPaymentByIdController();
const generetePixPaymentController = new GeneretePixPaymentController();

paymenteRoute.post("/", ensureAuthenticated, createPaymentController.handle);
paymenteRoute.get("/:id", getPaymentByIdController.handle);
paymenteRoute.get("/generate-pix/:id", generetePixPaymentController.handle);

export { paymenteRoute };
