import { MealsRepository, MealUpdate } from '@/repositories/meals-repository'
import { Meal } from '@prisma/client'
import { MealDoesNotExistsError } from './errors/meal-does-not-exists-error'

interface UpdateMealUseCaseRequest {
  mealId: string
  data: MealUpdate
}

interface UpdateMealUseCaseResponse {
  meal: Meal
}

export class UpdateMealUseCase {
  constructor(private mealRepository: MealsRepository) {}

  async execute({
    mealId,
    data,
  }: UpdateMealUseCaseRequest): Promise<UpdateMealUseCaseResponse> {
    const meal = await this.mealRepository.updateMealById(mealId, data)

    if (!meal) {
      throw new MealDoesNotExistsError()
    }

    return {
      meal,
    }
  }
}
