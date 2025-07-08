import { prisma } from "../utils/prisma";

export class ElementServices {
	async getAllElements() {
		try {
			return await prisma.element.findMany({});
		} catch (error) {
			console.error("Error fetching items:", error);
			throw error;
		}
	}

	async createElement(data: any) {
		try {
			return await prisma.element.create({
				data: {
					name: data.name,
				},
			});
		} catch (error) {
			console.error("Error creating item:", error);
			throw error;
		}
	}

	async updateElement(id: number, data: any) {
		try {
			return await prisma.element.update({
				where: { id },
				data: {
					name: data.name,
				},
			});
		} catch (error) {
			console.error("Error updating item:", error);
			throw error;
		}
	}

	async deleteElement(id: number) {
		try {
			return await prisma.element.delete({
				where: { id },
			});
		} catch (error) {
			console.error("Error deleting item:", error);
			throw error;
		}
	}
}

export const elementServices = new ElementServices();