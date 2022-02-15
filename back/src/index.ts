import * as express from 'express'
const app = express()
import route from "./route"

app.use(route)

app.listen(5000, (err: string) => {
  if (err) {
    throw new Error(err)
  }
  console.log("Starting server... http://localhost:5000")
})