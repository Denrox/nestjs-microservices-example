import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import mongoose from 'mongoose';
import { AppModule } from './../src/app.module.js';
import { userSignupRequestSuccess } from './mocks/user-signup-request-success.mock.js';

describe('Users Sign Out (e2e)', () => {
  let app;
  let userToken;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_DSN);
    await mongoose.connection.dropDatabase();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users/ (POST) - should create a valid user', () => {
    return request(app.getHttpServer())
      .post('/users/')
      .send(userSignupRequestSuccess)
      .expect(201);
  });

  it('/users/login (POST) - should create a token for valid credentials', () => {
    return request(app.getHttpServer())
      .post('/users/login')
      .send(userSignupRequestSuccess)
      .expect(201)
      .expect((res) => {
        userToken = res.body.data.token;
      });
  });

  it('/users/ (GET) - should retrieve user by a valid token', () => {
    return request(app.getHttpServer())
      .get('/users/')
      .set('Authorization', userToken)
      .send()
      .expect(200);
  });

  it('/users/logout (POST) - should destroy token for user', () => {
    return request(app.getHttpServer())
      .put('/users/logout')
      .set('Authorization', userToken)
      .expect(200)
      .expect({
        message: 'token_destroy_success',
        errors: null,
        data: null,
      });
  });

  it('/users/ (GET) - should not retrieve user by a destroyed token', () => {
    return request(app.getHttpServer())
      .get('/users/')
      .set('Authorization', userToken)
      .send()
      .expect(401)
      .expect({
        message: 'token_decode_unauthorized',
        data: null,
        errors: null,
      });
  });
});
