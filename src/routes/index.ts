import { Router } from 'express';
import elementsRoutes from './elementRoutes';
import skillRoutes from './skillRoutes';

const router = Router();

router.use('/elements', elementsRoutes);
router.use('/skills', skillRoutes);

export default router;