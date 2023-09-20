import { InMemoryMealsRepository } from '@/repositories/in-memory/in-memory-meals-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { MealDoesNotExistsError } from './errors/meal-does-not-exists-error'
import { FetchAUserMealUseCase } from './fetch-a-user-meal'

let mealsRepository: InMemoryMealsRepository
let sut: FetchAUserMealUseCase

describe('Fetch User Meals Use Case', () => {
  beforeEach(() => {
    mealsRepository = new InMemoryMealsRepository()
    sut = new FetchAUserMealUseCase(mealsRepository)
  })

  it('should be able to fetch a meal already register', async () => {
    const meal = await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal 1',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal 2',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    const { meal: responseMeal } = await sut.execute({ id: meal.id })

    expect(responseMeal.id).toBe(meal.id)
  })

  it('should be not able to fetch a meal that was not register', async () => {
    expect(() => sut.execute({ id: '1' })).rejects.toBeInstanceOf(
      MealDoesNotExistsError,
    )
  })
})
