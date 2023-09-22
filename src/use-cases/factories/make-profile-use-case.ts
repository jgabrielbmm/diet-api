import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { ProfileUseCase } from '../profile'

export function MakeProfileUseCase() {
  const userRepository = new PrismaUserRepository()
  const useCase = new ProfileUseCase(userRepository)

  return useCase
}
