import { Prisma, Meal } from '@prisma/client'
import { MealsRepository, MealUpdate } from '../meals-repository'

export class InMemoryMealsRepository implements MealsRepository {
  public items: Meal[] = []

  async getBestDietSequence(userId: string): Promise<number> {
    const meals = this.items.filter((item) => item.user_id === userId)

    let bestDietSequence = 0
    let currentBestDietSequence = 0

    meals.forEach((item) => {
      if (item.in_diet) {
        currentBestDietSequence++
        if (currentBestDietSequence > bestDietSequence) {
          bestDietSequence = currentBestDietSequence
        }
      } else {
        currentBestDietSequence = 0
      }
    })

    return bestDietSequence
  }

  async getUserMealInDietQuantity(userId: string): Promise<number> {
    const userMealsInDiet = this.items.filter(
      (item) => item.user_id === userId && item.in_diet === true,
    )

    return userMealsInDiet.length
  }

  async getUserMealQuantity(userId: string): Promise<number> {
    const userMeals = this.items.filter((item) => item.user_id === userId)

    return userMeals.length
  }

  async deleteMealById(id: string) {
    const index = this.items.findIndex((item) => item.id === id)
    this.items.splice(index, 1)
  }

  async updateMealById(id: string, data: MealUpdate) {
    this.items.forEach((item) => {
      if (item.id === id) {
        return Object.assign(item, data)
      }
      return item
    })

    const meal = this.items.find((item) => item.id === id)
    if (!meal) {
      return null
    }

    return meal
  }

  async findMealById(id: string) {
    const meal = this.items.find((item) => item.id === id)
    if (!meal) {
      return null
    }

    return meal
  }

  async findManyMealsByUserId(userId: string, page: number) {
    const meals = this.items
      .filter((items) => items.user_id === userId)
      .slice((page - 1) * 20, page * 20)

    return meals
  }

  async create(data: Prisma.MealUncheckedCreateInput) {
    const meal = {
      id: 'meal_id',
      name: data.name,
      description: data.description ?? null,
      consume_date: new Date(data.consume_date),
      in_diet: data.in_diet,
      user_id: data.user_id,
    }

    this.items.push(meal)

    return meal
  }
}
