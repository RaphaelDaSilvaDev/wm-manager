import { Router } from "express";
import { CreateClientController } from "../../../../modules/Client/useCase/createClient/CreateClientController";
import { EditClientController } from "../../../../modules/Client/useCase/editClient/EditClientController";
import { GetClientController } from "../../../../modules/Client/useCase/getClient/GetClientContoller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const clientRoute = Router();

const getClient = new GetClientController();
const editClient = new EditClientController();
const createClient = new CreateClientController();

clientRoute.post("/", createClient.handle);
clientRoute.get("/", getClient.handle);
clientRoute.patch("/:id", editClient.handle);

export { clientRoute };
