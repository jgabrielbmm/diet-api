import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticationUseCase } from '../authentication'

export function makeAuthenticationUseCase() {
  const usersRepository = new PrismaUserRepository()
  const useCase = new AuthenticationUseCase(usersRepository)

  return useCase
}
