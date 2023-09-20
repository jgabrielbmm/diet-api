import { MealsRepository } from '@/repositories/meals-repository'
import { Meal } from '@prisma/client'

interface FetchUserMealsUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserMealsUseCaseResponse {
  meals: Meal[]
}

export class FetchUserMealsUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserMealsUseCaseRequest): Promise<FetchUserMealsUseCaseResponse> {
    const meals = await this.mealsRepository.findManyMealsByUserId(userId, page)
    return {
      meals,
    }
  }
}
