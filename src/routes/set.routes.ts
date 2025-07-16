import { Router } from "express";
import SetController from "../controller/set.controller";

const setRoutes = Router();

setRoutes.route('/')
	.get(SetController.getAllSets);

setRoutes.route('/:id/set')
	.post(SetController.createSetWithPieces);

export default setRoutes;
