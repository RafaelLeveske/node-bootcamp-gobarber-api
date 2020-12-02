import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('deve ser permitido criar um novo usuário', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const user = await createUser.execute({
      name: 'Rafael',
      email: 'rafael@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('não deve ser permitido a criação de um usuário com email repetido', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Rafael',
      email: 'rafael@example.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Rafael',
        email: 'rafael@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
