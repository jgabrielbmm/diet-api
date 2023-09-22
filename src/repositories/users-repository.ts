import { User, Prisma } from '@prisma/client'

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>
  getById(id: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
