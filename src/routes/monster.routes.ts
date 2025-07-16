import { Router } from "express";
import MonsterController from "../controller/monster.controller";

const monsterRoutes = Router();

monsterRoutes.route('/')
	.get(MonsterController.getAllMonsters)
	.post(MonsterController.createMonster);

monsterRoutes.route('/:id')
	.put(MonsterController.putMonster)
	.delete(MonsterController.deleteMonster);

export default monsterRoutes;
