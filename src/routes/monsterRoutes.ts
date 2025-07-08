import { Router } from "express";
import MonsterController from "../controller/MonsterController";

const monsterRoutes = Router();

monsterRoutes.get("/", MonsterController.getAllMonsters);
monsterRoutes.post("/", MonsterController.createMonster);
monsterRoutes.put("/:id", MonsterController.putMonster);
monsterRoutes.delete("/:id", MonsterController.deleteMonster);

export default monsterRoutes;
