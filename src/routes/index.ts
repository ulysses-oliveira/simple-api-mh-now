import { Router } from 'express';
import elementsRoutes from './elementRoutes';
import skillRoutes from './skillRoutes';
import monsterRoutes from './monsterRoutes';
import weaponTypeRoutes from './weaponTypeRoutes';

const router = Router();

router.use('/elements', elementsRoutes);
router.use('/skills', skillRoutes);
router.use('/monsters', monsterRoutes);
router.use('/types-weapons', weaponTypeRoutes);

export default router;
