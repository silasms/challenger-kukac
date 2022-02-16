import { Request, Response } from "express";
import ceps from "../module/ceps/index"

const cepsController = async (req: Request, res: Response) => {
  res.json(await ceps(req.body.ceps))
}

export default cepsController