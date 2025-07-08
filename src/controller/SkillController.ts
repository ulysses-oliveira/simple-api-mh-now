import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { skillServices } from "../services/SkillServices";

const SkillController = {
	getAllSkills: async (req: Request, res: Response) => {
		try {
			const skills = await skillServices.getAllSkills();
			res.status(200).json(skills);
		} catch (error) {
			console.error("Error fetching skills:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	createSkill: async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const skill = await skillServices.createSkill(data);
			res.status(201).json(skill);
		} catch (error) {
			console.error("Error creating skill:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	putSkill: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = req.body;

			const updatedSkill = await skillServices.updateSkill(Number(id), data);
			if (!updatedSkill) {
				res.status(404).json({ error: "Skill not found" });
				return;
			}
			res.status(200).json(updatedSkill);
		} catch (error) {
			console.error("Error updating skill:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	deleteSkill: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const deletedSkill = await skillServices.deleteSkill(Number(id));
			if (!deletedSkill) {
				res.status(404).json({ error: "Skill not found" });
				return;
			}
			res.sendStatus(204);
		} catch (error) {
			console.error("Error deleting skill:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}

export default SkillController;