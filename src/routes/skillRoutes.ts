import { Router } from "express";
import SkillController from "../controller/SkillController";

const skillRoutes = Router();

skillRoutes
	.get("/", SkillController.getAllSkills)
	.post("/", SkillController.createSkill)
	.put("/:id", SkillController.putSkill)
	.delete("/:id", SkillController.deleteSkill);

export default skillRoutes;
