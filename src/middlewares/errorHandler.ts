import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
