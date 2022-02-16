import { Request, Response } from "express";
import DB from "../db"

const listVehController = (req: Request, res: Response) => {
  res.json(DB)
}

export default listVehController