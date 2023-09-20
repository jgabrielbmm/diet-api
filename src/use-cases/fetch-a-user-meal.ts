import { MealsRepository } from '@/repositories/meals-repository'
import { Meal } from '@prisma/client'
import { MealDoesNotExistsError } from './errors/meal-does-not-exists-error'

interface FetchAUserMealUseCaseRequest {
  id: string
}

interface FetchAUserMealUseCaseResponse {
  meal: Meal
}

export class FetchAUserMealUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    id,
  }: FetchAUserMealUseCaseRequest): Promise<FetchAUserMealUseCaseResponse> {
    const meal = await this.mealsRepository.findMealById(id)
    if (!meal) {
      throw new MealDoesNotExistsError()
    }
    return {
      meal,
    }
  }
}
