import { MissingParam } from '../errors/missing-param'
import { badRequest } from '../helper/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    const fields = ['name', 'email', 'password', 'confirm_password']
    for (const field of fields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParam(field))
      }
    }
  }
}
