import { Router } from "express";
import WeaponTypeController from "../controller/weaponType.controller";

const weaponTypeRoutes = Router();

weaponTypeRoutes.route('/')
	.get(WeaponTypeController.getAllWeaponTypes)
	.post(WeaponTypeController.createWeaponType);

weaponTypeRoutes.route('/:id')
	.put(WeaponTypeController.putWeaponType)
	.delete(WeaponTypeController.deleteWeaponType);

export default weaponTypeRoutes;
