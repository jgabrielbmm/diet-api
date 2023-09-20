import { Meal, Prisma } from '@prisma/client'
export interface MealUpdate {
  name?: string
  description?: string
  consume_date?: Date
  in_diet?: boolean
}

export interface MealsRepository {
  getBestDietSequence(userId: string): Promise<number>
  getUserMealInDietQuantity(userId: string): Promise<number>
  getUserMealQuantity(userId: string): Promise<number>
  deleteMealById(id: string): Promise<void>
  updateMealById(id: string, data: MealUpdate): Promise<Meal | null>
  findMealById(id: string): Promise<Meal | null>
  findManyMealsByUserId(userId: string, page: number): Promise<Meal[]>
  create(data: Prisma.MealUncheckedCreateInput): Promise<Meal>
}
