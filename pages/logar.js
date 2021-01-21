import Head from 'next/head';
import Link from 'next/link';

const Logar = () => {
  return (
    <div>
      <Head>
        <title>Logar</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Entrar
        </button>
        <p className="my-2">
          Não tem conta?
          <Link href="/cadastro">
            <a style={{ color: 'crimson' }}>Criar conta</a>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Logar;
