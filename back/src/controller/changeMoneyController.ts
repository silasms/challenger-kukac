import { Request, Response } from "express";
import changedMoney from "../module/change-money";

const changedMoneyController = (req: Request, res: Response) => {
  const {payment, numberChange} = req.body
  res.json(changedMoney(payment, numberChange))
}

export default changedMoneyController