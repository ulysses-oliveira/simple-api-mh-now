import { Request, Response } from "express";
import { monsterServices } from "../services/MonsterServices";

const MonsterController = {
	getAllMonsters: async (req: Request, res: Response) => {
		try {
			const monsters = monsterServices.getAllMonsters();
			res.status(200).json(monsters);
		} catch (error) {
			console.error("Error fetching monsters:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	createMonster: async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const monster = await monsterServices.createMonster(data);
			res.status(201).json(monster);
		} catch (error) {
			console.error("Error creating monster:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	putMonster: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = req.body;

			const updatedMonster = await monsterServices.updateMonster(Number(id), data);
			if (!updatedMonster) {
				res.status(404).json({ error: "Monster not found" });
				return;
			}

			res.status(200).json(updatedMonster);
		} catch (error) {
			console.error("Error updating monster:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	deleteMonster: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const deletedMonster = await monsterServices.deleteMonster(Number(id));
			if (!deletedMonster) {
				res.status(404).json({ error: "Monster not found" });
				return;
			}
			res.sendStatus(204);
		} catch (error) {
			console.error("Error deleting monster:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
};

export default MonsterController;
