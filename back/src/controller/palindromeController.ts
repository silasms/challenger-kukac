import { Request, Response} from 'express'
import palindrome from '../module/palindrome'

const palindromeController = (req: Request, res:  Response) => {
  res.json(palindrome(req.body.numberInitial, req.body.numberFinally))
}

export default palindromeController