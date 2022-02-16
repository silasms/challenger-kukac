import { Request, Response } from "express";
import { Motocycle } from "../module/vehicles/vehicle";
import DB from "../db";

const motocycleController = (req: Request, res: Response) => {
  const {model, year, brand, passengers} = req.body
  const motocycle = new Motocycle(model, year, brand, passengers)
  DB.push(motocycle)
  res.json(motocycle)
}

export default motocycleController