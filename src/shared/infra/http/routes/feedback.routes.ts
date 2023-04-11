import { Router } from "express";
import { CreateFeedBackController } from "../../../../modules/FeedBack/useCase/CreateFeedBack/CreateFeedBackController";

const createFeedBackController = new CreateFeedBackController();

const feedBackRoute = Router();

feedBackRoute.post("/:id", createFeedBackController.handle);

export { feedBackRoute };
