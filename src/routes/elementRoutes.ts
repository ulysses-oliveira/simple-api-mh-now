import { Router } from 'express';
import ElementController from '../controller/ElementController';

const elementRoutes = Router();

elementRoutes
	.get('/', ElementController.getAllElements)
	.post('/', ElementController.createElement)
	.put('/:id', ElementController.putElement)
	.delete('/:id', ElementController.deleteElement);

export default elementRoutes;
