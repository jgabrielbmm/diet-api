import { MealsRepository } from '@/repositories/meals-repository'

interface DeleteUserMealUseCaseRequest {
  mealId: string
}

export class DeleteUserMealUseCase {
  constructor(private mealRepository: MealsRepository) {}

  async execute({ mealId }: DeleteUserMealUseCaseRequest) {
    await this.mealRepository.deleteMealById(mealId)
  }
}
