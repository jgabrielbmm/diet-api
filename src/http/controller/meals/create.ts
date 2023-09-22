import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeRegisterMealUseCase } from '@/use-cases/factories/make-register-meal-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    description: z.string().nullable(),
    consume_date: z.string(),
    in_diet: z.boolean(),
    user_id: z.string(),
  })

  const { name, description, consume_date, in_diet, user_id } =
    createBodySchema.parse(request.body)

  try {
    const createMealUseCase = makeRegisterMealUseCase()
    await createMealUseCase.execute({
      name,
      consume_date: new Date(consume_date),
      in_diet,
      user_id,
      description: description ?? undefined,
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(400).send()
    }
    throw error
  }

  return reply.status(201).send()
}
