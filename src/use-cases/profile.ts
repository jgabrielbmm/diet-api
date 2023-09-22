import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface ProfileUseCaseRequest {
  userId: string
}

interface ProfileUseCaseResponse {
  user: User
}

export class ProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: ProfileUseCaseRequest): Promise<ProfileUseCaseResponse> {
    const user = await this.usersRepository.getById(userId)
    if (!user) {
      throw new ResourceNotFoundError()
    }
    return {
      user,
    }
  }
}
