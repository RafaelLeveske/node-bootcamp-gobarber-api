import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';
import FakeMailProvider from '../../../shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokensRepository: FakeUserTokensRepository;
let sendForgotPasswordEmailService: SendForgotPasswordEmailService;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    );
  });

  it('deve ser permitido recuperar a senha via email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'Rafael',
      email: 'rafael@example.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'rafael@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('deve ser permitido recuperar a senha via email de um usuário não existente', async () => {
    await expect(
      sendForgotPasswordEmailService.execute({
        email: 'rafael@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('deve ser permitido gerar um token de senha', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'Rafael',
      email: 'rafael@example.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'rafael@example.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
