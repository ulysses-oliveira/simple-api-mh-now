import { Router } from "express";
import SkillController from "../controller/skill.controller";

const skillRoutes = Router();

skillRoutes.route('/:id')
	.get(SkillController.getAllSkills)
	.post(SkillController.createSkill);

skillRoutes.route('/:id')
	.put(SkillController.putSkill)
	.delete(SkillController.deleteSkill);

export default skillRoutes;
