// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const num = req.params.num;

  if (typeof num !== 'string') {
    res.status(400).send('Invalid input: num must be a string');
    return;
  }

  const parsedNum = parseInt(num, 10);

  if (isNaN(parsedNum)) {
    res.status(400).send('Invalid input: num must be a valid integer');
    return;
  }

  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};