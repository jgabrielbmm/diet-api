export class MealDoesNotExistsError extends Error {
  constructor() {
    super('Meal does not exists.')
  }
}
