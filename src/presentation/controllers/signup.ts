import { InvalidParam } from '../errors/invalid-param'
import { MissingParam } from '../errors/missing-param'
import { badRequest } from '../helper/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { EmailValidator } from '../protocols/invalid-email'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    const fields = ['name', 'email', 'password', 'confirm_password']
    for (const field of fields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParam(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParam('email'))
    }
  }
}
