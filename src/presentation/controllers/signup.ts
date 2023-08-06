import { MissingParam } from '../errors/missing-param'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParam('name')
      }
    }
    return {
      statusCode: 400,
      body: new MissingParam('email')
    }
  }
}
