import { PrismaMealsRepository } from '@/repositories/prisma/prisma-meals-repository'
import { DeleteUserMealUseCase } from '../delete-user-meal'

export function makeDeleteMealUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const useCase = new DeleteUserMealUseCase(mealsRepository)

  return useCase
}
