import { Router } from 'express';
import ElementController from '../controller/element.controller';

const elementRoutes = Router();

elementRoutes
	.get('/', ElementController.getAllElements)
	.post('/', ElementController.createElement)

elementRoutes.route('/:id')
	.put(ElementController.putElement)
	.delete(ElementController.deleteElement);

export default elementRoutes;
