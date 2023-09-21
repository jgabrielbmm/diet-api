import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

export function makeCreateUserUseCase() {
  const usersRepository = new PrismaUserRepository()
  const useCase = new RegisterUseCase(usersRepository)

  return useCase
}
