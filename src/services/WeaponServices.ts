import { prisma } from "../utils/prisma";

export class WeaponServices {
 async getAllWeapons() {
	try {
		return await prisma.weapon.findMany({});
	} catch (error) {
		console.error("Error fetching weapons:", error);
		throw error;
	}
 }

 async createWeapon(data: any) {
	try {
		return await prisma.weaponType.create({
			data: {
				name: data.name,
				icon: data.icon ?? undefined
			}
		})
	} catch (error) {
		console.error("Error creating weapon:", error)
		throw error
	}
 }

 async updateWeapon(id: number, data: any) {
	try {
		return await prisma.weaponType.update({
			where: { id },
			data: {
				name: data.name,
				icon: data.icon
			}
		})
	} catch (error) {
		console.error("Error updating weapon:", error);
		throw error;
	}
 }

 async deleteWeapon(id: number) {
	try {
		return await prisma.weaponType.delete({ where: { id } })
	} catch (error) {
		console.error("Error deleting weapon:", error);
		throw error;
	}
 }
}

export const weaponServices = new WeaponServices();
