import { prisma } from "../utils/prisma";

export class SkillServices {
	async createSkill(data: any) {
		try {
			return await prisma.skill.create({
				data: {
					name: data.name,
					description: data.description,
				},
			})
		} catch (error) {
			console.error("Error creating skill:", error);
			throw error;
		}
	}

	async getAllSkills() {
		try {
			return await prisma.skill.findMany({});
		} catch (error) {
			console.error("Error fetching skills:", error);
			throw error;
		}
	}

	async updateSkill(id: number, data: any) {
		try {
			return await prisma.skill.update({
				where: { id },
				data: {
					name: data.name,
				},
			});
		} catch (error) {
			console.error("Error updating skill:", error);
			throw error;
		}
	}

	async deleteSkill(id: number) {
		try {
			return await prisma.skill.delete({
				where: { id },
			});
		} catch (error) {
			console.error("Error deleting skill:", error);
			throw error;
		}
	}
}

export const skillServices = new SkillServices();