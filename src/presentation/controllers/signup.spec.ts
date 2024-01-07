import { SignUpController } from './signup'
import { MissingParam } from '../errors/missing-param'
import { InvalidParam } from '../errors/invalid-param'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return status code 400 if no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'willian@gmail.com',
        password: 'any_password',
        confirm_password: 'any_password'
      }
    }
    const httResponse = sut.handle(httpRequest)
    expect(httResponse?.statusCode).toBe(400)
    expect(httResponse?.body).toEqual(new MissingParam('name'))
  })

  test('Should return status code 400 if no email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        confirm_password: 'any_password'
      }
    }
    const httResponse = sut.handle(httpRequest)
    expect(httResponse?.statusCode).toBe(400)
    expect(httResponse?.body).toEqual(new MissingParam('email'))
  })

  test('Should return status code 400 if no password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email',
        name: 'any_name',
        confirm_password: 'any_password'
      }
    }
    const httResponse = sut.handle(httpRequest)
    expect(httResponse?.statusCode).toBe(400)
    expect(httResponse?.body).toEqual(new MissingParam('password'))
  })

  test('Should return status code 400 if no confirm_password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email',
        name: 'any_name',
        password: 'any_password'
      }
    }
    const httResponse = sut.handle(httpRequest)
    expect(httResponse?.statusCode).toBe(400)
    expect(httResponse?.body).toEqual(new MissingParam('confirm_password'))
  })

  test('Should return status code 400 if an invalid email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'invalid_email',
        name: 'name',
        password: 'any_password',
        confirm_password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new InvalidParam('email'))
  })
})
