export class AuthMockService {
  login() {
    console.log('EJECUTANDO LOGIN FALSO');

    return {
      name: 'User Test',
      email: 'mail@mail.com',
    };
  }

  verificarToken() {}

  obtenerUsuarioAutenticado() {}
}
