import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";
import UsersControllers from "./controllers/UsersControllers";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.get("/orphanages/edit/:id", OrphanagesController.show);
routes.put("/orphanages/:id", OrphanagesController.edit);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

routes.get("/users/list/", UsersControllers.index);
routes.get("/users/list/:id", UsersControllers.show);
routes.post("/register", UsersControllers.create);

export default routes;
