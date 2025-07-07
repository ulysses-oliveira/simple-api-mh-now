import { prisma } from "../utils/prisma";

export class ElementsService {
	async createElement(data: any) {
		try {
			return await prisma.elemento.create({
				data: {
					nome: data.nome,
				},
			});
		} catch (error) {
			console.error("Error creating item:", error);
			throw error;
		}
	}

	async getAllElements() {
		try {
			return await prisma.elemento.findMany({});
		} catch (error) {
			console.error("Error fetching items:", error);
			throw error;
		}
	}

	async updateElement(id: number, data: any) {
		try {
			return await prisma.elemento.update({
				where: { id },
				data: {
					nome: data.nome,
				},
			});
		} catch (error) {
			console.error("Error updating item:", error);
			throw error;
		}
	}

	async deleteElement(id: number) {
		try {
			return await prisma.elemento.delete({
				where: { id },
			});
		} catch (error) {
			console.error("Error deleting item:", error);
			throw error;
		}
	}
}

export const elementsService = new ElementsService();