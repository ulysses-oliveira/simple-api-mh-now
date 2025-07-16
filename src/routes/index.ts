import { Router } from 'express';
import elementsRoutes from './element.routes';
import skillRoutes from './skill.routes';
import monsterRoutes from './monster.routes';
import weaponTypeRoutes from './weaponType.routes';
import setRoutes from './set.routes';

const router = Router();

router.use('/elements', elementsRoutes);
router.use('/skills', skillRoutes);
router.use('/monsters', monsterRoutes);
router.use('/types-weapons', weaponTypeRoutes);
router.use('/monsters', setRoutes);

export default router;
