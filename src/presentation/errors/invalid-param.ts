export class InvalidParam extends Error {
  constructor (paramName: string) {
    super(`Invalid Param - ${paramName}`)
    this.name = 'InvalidParam'
  }
}
