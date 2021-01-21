import Head from 'next/head';
import Link from 'next/link';

const Logar = () => {
  return (
    <div>
      <Head>
        <title>Logar</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="form-group mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="InputEmail" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Senha
          </label>
          <input type="password" className="form-control" id="InputPassword" />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Entrar
        </button>
        <p className="my-2">
          Não tem conta?
          <Link href="/cadastrar">
            <a style={{ color: 'crimson' }}> Criar conta</a>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Logar;
