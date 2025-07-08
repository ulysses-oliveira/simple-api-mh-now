import { prisma } from "../utils/prisma";

export class MonsterServices {
	async getAllMonsters() {
		try {
			return await prisma.monster.findMany({});
		} catch (error) {
			console.error("Error fetching monsters:", error);
			throw error;
		}
	}

	async createMonster(data: any) {
		try {
			return await prisma.monster.create({
				data: {
					name: data.name,
				}
			})
		} catch (error) {
			console.error("Error creating monster:", error);
			throw error;
		}
	}

	async updateMonster(id: number, data: any) {
		try {
			return await prisma.monster.update({
				where: { id },
				data: {
					name: data.name,
				}
			})
		} catch (error) {
			console.error("Error updating monster:", error);
			throw error;
		}
	}

	async deleteMonster(id: number ) {
		try {
			return await prisma.monster.delete({
				where: { id },
			})
		} catch (error) {
			console.error("Error deleting monster:", error);
			throw error;
		}
	}
}

export const monsterServices = new MonsterServices();
