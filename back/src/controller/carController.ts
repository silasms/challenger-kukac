import { Request, Response } from "express";
import { Car } from "../module/vehicles/vehicle";
import DB from "../db";

const carController = (req: Request, res: Response) => {
  const {model, year, brand, doors} = req.body
  const car = new Car(model, year, brand, doors)
  DB.push(car)
  res.json(car)
}

export default carController