import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const validation = await schema.parseAsync({
      body: req.body,
      coockies: req?.cookies,
    });
    // console.log('validation', validation)
    next();
  });
};

export default validateRequest;
