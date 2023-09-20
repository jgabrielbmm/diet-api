import { InMemoryMealsRepository } from '@/repositories/in-memory/in-memory-meals-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { MealDoesNotExistsError } from './errors/meal-does-not-exists-error'
import { UpdateMealUseCase } from './update-meal'

let mealsRepository: InMemoryMealsRepository
let sut: UpdateMealUseCase

describe('Update Meal Use Case', () => {
  beforeEach(() => {
    mealsRepository = new InMemoryMealsRepository()
    sut = new UpdateMealUseCase(mealsRepository)
  })

  it('should not be able to update a nonexistent meal', async () => {
    expect(() =>
      sut.execute({
        mealId: '',
        data: {
          name: 'meal',
        },
      }),
    ).rejects.toBeInstanceOf(MealDoesNotExistsError)
  })

  it('should be able to update a existent meal', async () => {
    const aMeal = await mealsRepository.create({
      name: 'meal',
      description: 'some meal',
      consume_date: new Date(),
      in_diet: true,
      user_id: 'user-1',
    })

    const { meal } = await sut.execute({
      mealId: aMeal.id,
      data: {
        name: 'update meal',
        description: 'description meal',
        consume_date: new Date('11-28-2023 00:00:00'),
      },
    })

    expect(meal).toEqual(
      expect.objectContaining({
        name: 'update meal',
        description: 'description meal',
      }),
    )

    expect(meal.consume_date).toStrictEqual(new Date('11-28-2023 00:00:00'))
  })
})
