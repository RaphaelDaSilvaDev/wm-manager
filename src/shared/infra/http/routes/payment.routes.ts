import { Router } from "express";
import { CreatePaymentController } from "../../../../modules/Payments/useCase/CreatePayment/CreatePaymentController";
import { GeneretePixPaymentController } from "../../../../modules/Payments/useCase/GeneratePixPayment/GeneretePixPaymentController";
import { GetPaymentByIdController } from "../../../../modules/Payments/useCase/GetPaymentById/GetPaymentByIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListAllPaymentController } from "../../../../modules/Payments/useCase/ListAllPayments/ListAllPaymentsController";

const paymenteRoute = Router();

const createPaymentController = new CreatePaymentController();
const getPaymentByIdController = new GetPaymentByIdController();
const generetePixPaymentController = new GeneretePixPaymentController();
const listAllPaymentController = new ListAllPaymentController();

paymenteRoute.post("/", ensureAuthenticated, createPaymentController.handle);
paymenteRoute.get("/:id", getPaymentByIdController.handle);
paymenteRoute.get("/generate-pix/:id", generetePixPaymentController.handle);
paymenteRoute.get("/all-payments/:id", listAllPaymentController.handle);

export { paymenteRoute };
