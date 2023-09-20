import { MealsRepository } from '@/repositories/meals-repository'

interface RegisterMealUseCaseRequest {
  name: string
  description?: string
  consume_date: Date
  in_diet: boolean
  user_id: string
}

export class RegisterMealUseCase {
  constructor(private mealsRepository: MealsRepository) {}
  async execute(data: RegisterMealUseCaseRequest) {
    const meal = this.mealsRepository.create({
      name: data.name,
      description: data.description,
      consume_date: data.consume_date,
      in_diet: data.in_diet,
      user_id: data.user_id,
    })
    return meal
  }
}
