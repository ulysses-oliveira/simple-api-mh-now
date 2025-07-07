import { Router } from 'express';
import elementsRoutes from './elementsRoutes';

const router = Router();

router.use('/elements', elementsRoutes);

export default router;