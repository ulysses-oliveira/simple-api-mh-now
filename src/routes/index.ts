import { Router } from 'express';
import elementsRoutes from './elementRoutes';
import skillRoutes from './skillRoutes';
import monsterRoutes from './monsterRoutes';

const router = Router();

router.use('/elements', elementsRoutes);
router.use('/skills', skillRoutes);
router.use('/monsters', monsterRoutes);

export default router;
