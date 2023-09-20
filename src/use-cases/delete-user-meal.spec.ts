import { InMemoryMealsRepository } from '@/repositories/in-memory/in-memory-meals-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { DeleteUserMealUseCase } from './delete-user-meal'

let mealRepository: InMemoryMealsRepository
let sut: DeleteUserMealUseCase

describe('Delete User Meal Use Case', () => {
  beforeEach(() => {
    mealRepository = new InMemoryMealsRepository()
    sut = new DeleteUserMealUseCase(mealRepository)
  })
  it('should be able to delete a meal', async () => {
    const meal = await mealRepository.create({
      name: 'meal 1',
      description: 'some meal',
      consume_date: new Date(),
      in_diet: true,
      user_id: 'user-1',
    })

    await mealRepository.create({
      name: 'meal 2',
      description: 'some meal',
      consume_date: new Date(),
      in_diet: true,
      user_id: 'user-1',
    })

    await sut.execute({ mealId: meal.id })

    expect(mealRepository.items).toHaveLength(1)
    expect(mealRepository.items).toEqual([
      expect.objectContaining({ name: 'meal 2' }),
    ])
  })
})
