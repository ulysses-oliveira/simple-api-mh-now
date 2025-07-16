import { MonsterElementType, PieceType } from "@prisma/client";
import { CreateMonsterDto } from "../dto/createMonster";
import { prisma } from "../utils/prisma";

export class MonsterServices {
	async getAllMonsters() {
		try {
			return await prisma.monster.findMany({
				select: {
					id: true,
					name: true,
				},
			});
		} catch (error) {
			console.error("Error fetching monsters:", error);
			throw error;
		}
	}

	async createMonster(data: CreateMonsterDto) {
		try {
			const { name, elements, set } = data;

			if (!name || !elements?.length) {
				throw new Error("Name and at least one element are required");
			}

			return await prisma.monster.create({
				data: {
					name,

					// Monster Elements
					monsterElements: {
						create: await Promise.all(
							elements.map(async ({ name: elementName, type }) => {
								const element = await prisma.element.upsert({
									where: { name: elementName },
									update: {},
									create: { name: elementName },
								});
								return {
									elementId: element.id,
									type: type as MonsterElementType,
								};
							})
						)
					},

					// Optional: Create Set + Pieces + PieceSkills
					set: set
						? {
							create: {
								name: set.name,
								pieces: {
									create: await Promise.all(
										set.pieces.map(async (piece) => {
											const pieceSkills =
												piece.skillRefs && piece.skillRefs.length > 0
													? {
														create: piece.skillRefs.map((skill) => ({
															skill: {
																connectOrCreate: {
																	where: { name: skill.name },
																	create: {
																		name: skill.name,
																		description: skill.description,
																	},
																},
															}
														}))
													}
													: undefined;
											return {
												name: piece.name,
												type: piece.type as PieceType,
												pieceSkills,
											};
										})
									),
								},
							},
						}
					: undefined,
				}
			});
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
