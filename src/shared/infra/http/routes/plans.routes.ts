import { Router } from "express";
import { CreatePlanController } from "../../../../modules/Plans/useCase/createPlan/CreatePlanController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const planRoute = Router();

const createPlanController = new CreatePlanController();

planRoute.post("/", ensureAuthenticated, createPlanController.handle);

export { planRoute };
