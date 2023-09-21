import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { MealsRepository, MealUpdate } from '../meals-repository'

export class PrismaMealsRepository implements MealsRepository {
  async getBestDietSequence(userId: string) {
    const meals = await prisma.meal.findMany({
      where: {
        user_id: userId,
      },
    })

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

  async getUserMealInDietQuantity(userId: string) {
    const mealsInDietQuantity = await prisma.meal.count({
      where: {
        user_id: userId,
        in_diet: true,
      },
    })

    return mealsInDietQuantity
  }

  async getUserMealQuantity(userId: string) {
    const mealsQuantity = await prisma.meal.count({
      where: {
        user_id: userId,
      },
    })

    return mealsQuantity
  }

  async deleteMealById(id: string) {
    await prisma.meal.delete({
      where: {
        id,
      },
    })
  }

  async updateMealById(id: string, data: MealUpdate) {
    const meal = await prisma.meal.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    })

    return meal
  }

  async findMealById(id: string) {
    const meal = await prisma.meal.findUnique({
      where: {
        id,
      },
    })

    return meal
  }

  async findManyMealsByUserId(userId: string, page: number) {
    const meals = await prisma.meal.findMany({
      where: {
        user_id: userId,
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return meals
  }

  async create(data: Prisma.MealUncheckedCreateInput) {
    const meal = await prisma.meal.create({
      data,
    })

    return meal
  }
}
