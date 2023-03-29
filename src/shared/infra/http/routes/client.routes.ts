import { Router } from "express";
import multer from "multer";
import upload from "../../../../config/upload";
import { CreateClientController } from "../../../../modules/Client/useCase/createClient/CreateClientController";
import { EditClientController } from "../../../../modules/Client/useCase/editClient/EditClientController";
import { GetClientController } from "../../../../modules/Client/useCase/getClient/GetClientContoller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const clientRoute = Router();

const uploadAvatar = multer(upload);

const getClient = new GetClientController();
const editClient = new EditClientController();
const createClient = new CreateClientController();

clientRoute.post("/", uploadAvatar.single("avatar"), createClient.handle);
clientRoute.get("/", getClient.handle);
clientRoute.patch("/:id", uploadAvatar.single("avatar"), editClient.handle);

export { clientRoute };
