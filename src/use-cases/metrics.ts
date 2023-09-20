import { MealsRepository } from '@/repositories/meals-repository'

interface MetricsUseCaseRequest {
  userId: string
}

export class MetricsUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({ userId }: MetricsUseCaseRequest) {
    const mealsQuantity = await this.mealsRepository.getUserMealQuantity(userId)
    const mealsInDietQuantity =
      await this.mealsRepository.getUserMealInDietQuantity(userId)
    const mealsOutDietQuantity = mealsQuantity - mealsInDietQuantity
    const bestDietSequence =
      await this.mealsRepository.getBestDietSequence(userId)

    return {
      meals_quantity: mealsQuantity,
      in_diet: mealsInDietQuantity,
      out_diet: mealsOutDietQuantity,
      best_in_diet_sequence: bestDietSequence,
    }
  }
}
