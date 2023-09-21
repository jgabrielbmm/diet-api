import { PrismaMealsRepository } from '@/repositories/prisma/prisma-meals-repository'
import { MetricsUseCase } from '../metrics'

export function makeMetricsUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const useCase = new MetricsUseCase(mealsRepository)

  return useCase
}
