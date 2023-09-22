import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create a meal e2e', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a meal', async () => {
    const { token, user } = await createAndAuthenticateUser(app)
    const response = await request(app.server)
      .post('/meals')
      .send({
        user_id: user.id,
        name: 'meal',
        consume_date: new Date(),
        in_diet: true,
        description: 'some description',
      })
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toEqual(201)
  })
})
