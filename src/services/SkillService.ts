import { prisma } from "../utils/prisma";

export class SkillService {
	async createSkill(data: any) {
		try {
			return await prisma.habilidade.create({
				data: {
					nome: data.nome,
				},
			})
		} catch (error) {
			console.error("Error creating skill:", error);
			throw error;
		}
	}

	async getAllSkills() {
		try {
			return await prisma.habilidade.findMany({});
		} catch (error) {
			console.error("Error fetching skills:", error);
			throw error;
		}
	}

	async updateSkill(id: number, data: any) {
		try {
			return await prisma.habilidade.update({
				where: { id },
				data: {
					nome: data.nome,
				},
			});
		} catch (error) {
			console.error("Error updating skill:", error);
			throw error;
		}
	}

	async deleteSkill(id: number) {
		try {
			return await prisma.habilidade.delete({
				where: { id },
			});
		} catch (error) {
			console.error("Error deleting skill:", error);
			throw error;
		}
	}
}

export const skillService = new SkillService();