import { Router } from "express";
import { CreatePlanController } from "../../../../modules/Plans/useCase/createPlan/CreatePlanController";
import { GetPlanByIdController } from "../../../../modules/Plans/useCase/getPlanById/GetPlanByIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListPlansController } from "../../../../modules/Plans/useCase/ListPlans/ListPlansController";

const planRoute = Router();

const createPlanController = new CreatePlanController();
const getPlanByIdController = new GetPlanByIdController();
const listPlansController = new ListPlansController();

planRoute.post("/", ensureAuthenticated, createPlanController.handle);
planRoute.get("/:id", ensureAuthenticated, getPlanByIdController.handle);
planRoute.get("/", ensureAuthenticated, listPlansController.handle);

export { planRoute };
