import { InMemoryMealsRepository } from '@/repositories/in-memory/in-memory-meals-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchUserMealsUseCase } from './fetch-user-meals'

let mealsRepository: InMemoryMealsRepository
let sut: FetchUserMealsUseCase

describe('Fetch User Meals Use Case', () => {
  beforeEach(() => {
    mealsRepository = new InMemoryMealsRepository()
    sut = new FetchUserMealsUseCase(mealsRepository)
  })

  it('should be able to fetch a meals history', async () => {
    await mealsRepository.create({
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

    await mealsRepository.create({
      user_id: 'user-2',
      name: 'meal 3',
      consume_date: new Date(),
      in_diet: true,
      description: 'some description',
    })

    const { meals } = await sut.execute({ userId: 'user-1', page: 1 })

    expect(meals).toHaveLength(2)
    expect(meals).toEqual([
      expect.objectContaining({ name: 'meal 1' }),
      expect.objectContaining({ name: 'meal 2' }),
    ])
  })

  it('should be able to fetch paginated | meals history', async () => {
    for (let i = 0; i < 23; i++) {
      await mealsRepository.create({
        user_id: 'user-1',
        name: `meal ${i}`,
        consume_date: new Date(),
        in_diet: true,
        description: 'some description',
      })
    }

    const { meals } = await sut.execute({ userId: 'user-1', page: 2 })

    expect(meals).toHaveLength(3)
    expect(meals).toEqual([
      expect.objectContaining({ name: 'meal 20' }),
      expect.objectContaining({ name: 'meal 21' }),
      expect.objectContaining({ name: 'meal 22' }),
    ])
  })
})
