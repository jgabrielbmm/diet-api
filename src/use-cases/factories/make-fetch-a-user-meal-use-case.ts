import { PrismaMealsRepository } from '@/repositories/prisma/prisma-meals-repository'
import { FetchAUserMealUseCase } from '../fetch-a-user-meal'

export function makeFetchAUserMealUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const useCase = new FetchAUserMealUseCase(mealsRepository)

  return useCase
}
