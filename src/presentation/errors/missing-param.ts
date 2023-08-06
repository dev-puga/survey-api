export class MissingParam extends Error {
  constructor (paramName: string) {
    super(`Missing Param - ${paramName}`)
    this.name = 'MissingParam'
  }
}
