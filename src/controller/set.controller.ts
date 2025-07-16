import { Request, Response } from "express";
import { setServices } from "../services/set.service";

const SetController = {
	getAllSets: async (req: Request, res: Response) => {
		try {
			const sets = await setServices.getAllSets();
			res.status(200).json(sets);
		} catch (error) {
			console.error("Error fetching sets:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	createSetWithPieces: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = req.body;
			const set = await setServices.createSetWithPieces(Number(id), data);
			res.status(201).json(set);
		} catch (error) {
			console.error("Error creating set with pieces:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
}

export default SetController;
