import { Request, Response } from "express";
import { weaponServices } from "../services/weaponType.services";

const WeaponTypeController = {
	getAllWeaponTypes: async (req: Request, res: Response) => {
		try {
			const weapons = await weaponServices.getAllWeaponTypes();
			res.status(200).json(weapons);
		} catch (error) {
			console.error("Error fetching weapons:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	createWeaponType: async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const weapon = weaponServices.createWeaponType(data);
			res.status(201).json(weapon)
		} catch (error) {
			console.error("Error creating weapons:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	putWeaponType: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = req.body;

			const updatedWeapon = weaponServices.updateWeaponType(Number(id), data);
			if (!updatedWeapon) {
				res.status(404).json({ error: "Weapon not found" });
				return;
			}
			res.status(200).json(updatedWeapon);
		} catch (error) {
			console.error("Error updating weapons:", error);
			res.status(500).json({ error: "Internal Server Error" })
		}
	},

	deleteWeaponType: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const deletedWeapon = await weaponServices.deleteWeaponType(Number(id));
			if (!deletedWeapon) {
				res.status(404).json({ error: "Weapon not found" });
				return;
			}
			res.sendStatus(204);
		} catch (error) {
			console.error("Error deleting weapons:", error);
			res.status(500).json({ error: "Internal Server Error" })
		}
	}
}

export default WeaponTypeController;
