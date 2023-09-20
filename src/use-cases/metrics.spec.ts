import { InMemoryMealsRepository } from '@/repositories/in-memory/in-memory-meals-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { MetricsUseCase } from './metrics'

let mealsRepository: InMemoryMealsRepository
let sut: MetricsUseCase

describe('Metrics Meal Use Case', () => {
  beforeEach(() => {
    mealsRepository = new InMemoryMealsRepository()
    sut = new MetricsUseCase(mealsRepository)
  })

  it('should be able to create a new meal', async () => {
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: false,
      description: 'some description',
    })

    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: false,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: false,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: false,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })
    await mealsRepository.create({
      user_id: 'user-1',
      name: 'meal',
      consume_date: new Date(),
      in_diet: false,
      description: 'some description',
    })

    const { out_diet, in_diet, best_in_diet_sequence, meals_quantity } =
      await sut.execute({ userId: 'user-1' })

    expect(out_diet).toBe(5)
    expect(in_diet).toBe(11)
    expect(meals_quantity).toBe(16)
    expect(best_in_diet_sequence).toBe(6)
  })
})
