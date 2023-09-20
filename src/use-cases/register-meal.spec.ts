import { InMemoryMealsRepository } from '@/repositories/in-memory/in-memory-meals-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterMealUseCase } from './register-meal'

let mealsRepository: InMemoryMealsRepository
let sut: RegisterMealUseCase

describe('Register Meal Use Case', () => {
  beforeEach(() => {
    mealsRepository = new InMemoryMealsRepository()
    sut = new RegisterMealUseCase(mealsRepository)
  })

  it('should be able to create a new meal', async () => {
    const meal = await sut.execute({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    expect(meal.name).toBe('meal')
    expect(mealsRepository.items.length).toBe(1)
  })
})
