import { ErrorMessage, Response, SuccessMesage } from '../utils/response'

export function isObject(value: unknown): Response {
  if (typeof value !== 'object' && value !== null)
    ErrorMessage(`${value} is not valid object`)

  return SuccessMesage()
}
