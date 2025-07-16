import { PieceType } from "@prisma/client";
import { prisma } from "../utils/prisma";

export class SetServices {
	async getAllSets() {
		try {
			return await prisma.set.findMany({
				include: {
					monster: true,
					pieces: true,
				},
			});
		} catch (error) {
			console.error('Error fetching sets:', error);
			throw error;
		}
	}

	async createSetWithPieces(id: number, data: any) {
		try {
			const monsterId = id;
			const { name, pieces } = data;
			const set = await prisma.set.create({
				data: {
					name: name,
					monster: {
						connect: { id: monsterId }
					},
					pieces: {
						create: pieces.map((piece: any) => ({
							type: piece.type as PieceType,
							name: piece.name,
							pieceSkills: {
								create: piece.skills.map((skill: any) => ({
									skill: {
										connectOrCreate: {
											where: { name: skill.name },
											create: {
												name: skill.name,
												description: skill.description || "",
											},
										},
									},
								})),
							},
						})),
					},
				},
				include: {
					pieces: {
						include: {
							pieceSkills: {
								include: {
									skill: true,
								},
							},
						}
					},
				},
			});
			return set;
		} catch (error) {
			console.error('Error creating set with pieces:', error);
			throw error;
		}
	}
}

export const setServices = new SetServices();
