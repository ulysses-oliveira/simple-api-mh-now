import { Request, Response } from "express";
import { weaponServices } from "../services/WeaponServices";

const WeaponController = {
	getAllWeapons: async (req: Request, res: Response) => {
		try {
			const weapons = await weaponServices.getAllWeapons();
			res.status(200).json(weapons);
		} catch (error) {
			console.error("Error fetching weapons:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	createWeapon: async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const weapon = weaponServices.createWeapon(data);
			res.status(201).json(weapon)
		} catch (error) {
			console.error("Error creating weapons:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	putWeapon: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = req.body;

			const updatedWeapon = weaponServices.updateWeapon(Number(id), data);
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

	deleted: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const deletedWeapon = await weaponServices.deleteWeapon(Number(id));
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

export default WeaponController;
