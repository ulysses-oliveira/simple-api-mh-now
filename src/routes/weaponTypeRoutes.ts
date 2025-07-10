import { Router } from "express";
import WeaponTypeController from "../controller/WeaponTypeController";

const weaponTypeRoutes = Router();

weaponTypeRoutes
	.get("/", WeaponTypeController.getAllWeaponTypes)
	.post("/", WeaponTypeController.createWeaponType)
	.put("/:id", WeaponTypeController.putWeaponType)
	.delete("/:id", WeaponTypeController.deleteWeaponType);

export default weaponTypeRoutes;
