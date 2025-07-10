import { Router } from "express";
import WeaponController from "../controller/WeaponController";

const weaponRoutes = Router();

weaponRoutes
	.get("/", WeaponController.getAllWeapons)
	.post("/", WeaponController.createWeapon)
	.put("/:id", WeaponController.putWeapon)
	.delete("/:id", WeaponController.deleted);

export default weaponRoutes;

