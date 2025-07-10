import { Router } from 'express';
import elementsRoutes from './elementRoutes';
import skillRoutes from './skillRoutes';
import monsterRoutes from './monsterRoutes';
import weaponRoutes from './weaponRoutes';

const router = Router();

router.use('/elements', elementsRoutes);
router.use('/skills', skillRoutes);
router.use('/monsters', monsterRoutes);
router.use('/weapons', weaponRoutes);

export default router;
