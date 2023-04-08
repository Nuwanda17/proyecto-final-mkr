import { check, validationResult } from 'express-validator'

export const validatorCreateTask = [
  check('title').exists().withMessage('El campo titulo es obligatorio.').trim().isLength({ min: 3 }).withMessage('El campo titulo debe tener almenos 3 caracteres.'),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (error) {
      return res.status(400).json({ response: 'error', errors: error.array() })
    }
  }
]