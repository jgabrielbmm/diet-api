import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateUser(app: FastifyInstance) {
  await request(app.server).post('/users').send({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '123456',
  })

  const authResponse = await request(app.server).post('/sessions').send({
    email: 'johndoe@example.com',
    password: '123456',
  })
  const { token } = authResponse.body

  const profileResponse = await request(app.server)
    .get('/me')
    .set('Authorization', `Bearer ${token}`)

  const { user } = profileResponse.body

  return {
    token,
    user,
  }
}
