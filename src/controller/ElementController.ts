import { Request, Response } from 'express';
import { elementsService } from '../services/ElementService';

const ElementController = {
	getAllElements: async (req: Request, res: Response) => {
		try {
			const elements = await elementsService.getAllElements();
			res.status(200).json(elements);
		} catch (error) {
			console.error("Error fetching elements:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	createElement: async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const element = await elementsService.createElement(data);
			res.status(201).json(element);
		} catch (error) {
			console.error("Error creating element:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	putElement: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = req.body;

			const numericId = Number(id);
			if (isNaN(numericId)) {
				res.status(400).json({ error: "Invalid element ID" });
				return;
			}

			const updatedElement = await elementsService.updateElement(numericId, data);
			if (!updatedElement) {
				res.status(404).json({ error: "Element not found" });
				return;
			}
			res.status(200).json(updatedElement);
		} catch (error) {
			console.error("Error updating element:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},

	deleteElement: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const numericId = Number(id);
			if (isNaN(numericId)) {
				res.status(400).json({ error: "Invalid element ID" });
				return;
			}

			const deletedElement = await elementsService.deleteElement(numericId);
			if (!deletedElement) {
				res.status(404).json({ error: "Element not found" });
				return;
			}
			res.status(204).send();
		} catch (error) {
			console.error("Error deleting element:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
};

export default ElementController;