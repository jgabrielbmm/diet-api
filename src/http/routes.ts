import { FastifyInstance } from 'fastify'
import { authenticate } from './controller/authenticate'
import { profile } from './controller/profile'
import { register } from './controller/register'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/session', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
