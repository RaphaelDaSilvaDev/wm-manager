import { Router } from "express";
import { CreatePlanController } from "../../../../modules/Plans/useCase/createPlan/CreatePlanController";
import { GetPlanByIdController } from "../../../../modules/Plans/useCase/getPlanById/GetPlanByIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const planRoute = Router();

const createPlanController = new CreatePlanController();
const getPlanByIdController = new GetPlanByIdController();

planRoute.post("/", ensureAuthenticated, createPlanController.handle);
planRoute.get("/:id", ensureAuthenticated, getPlanByIdController.handle);

export { planRoute };
