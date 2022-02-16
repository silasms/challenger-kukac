import express  from "express"
import {
  palindromeController,
  cepsController,
  changedMoneyController,
  carController,
  motocycleController,
  listVehicleController
} from "./controller/index"

const routes = express.Router()

routes.post("/palindrome", palindromeController)

routes.post("/ceps", cepsController)

routes.post("/changedmoney", changedMoneyController)

routes.post("/veh/car", carController)
routes.post("/veh/motocycle", motocycleController)
routes.get("/veh", listVehicleController)

export default routes