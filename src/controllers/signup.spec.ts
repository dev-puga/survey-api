import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return status code 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'willian@gmail.com',
        password: 'any_password',
        confirm_password: 'any_password'
      }
    }
    const httResponse = sut.handle(httpRequest)
    expect(httResponse.statusCode).toBe(400)
    expect(httResponse.body).toEqual(new Error('Missing param: name'))
  })

  test('Should return status code 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        confirm_password: 'any_password'
      }
    }
    const httResponse = sut.handle(httpRequest)
    expect(httResponse.statusCode).toBe(400)
    expect(httResponse.body).toEqual(new Error('Missing param: email'))
  })
})
