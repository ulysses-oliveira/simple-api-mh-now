import { Router } from 'express';
import elementsRoutes from './elementRoutes';

const router = Router();

router.use('/elements', elementsRoutes);

export default router;