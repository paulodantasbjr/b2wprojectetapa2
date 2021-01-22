import Head from 'next/head';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import valid from '../utils/validar';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import { useRouter } from 'next/router';

const Cadastrar = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const res = await postData('auth/cadastrar', userData);

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Página de Cadastro</title>
      </Head>

      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="InputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="InputPassword">Senha</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="InputConfirmPassword">Confirmar senha</label>
          <input
            type="password"
            className="form-control"
            id="InputConfirmPassword"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Cadastrar
        </button>
        <p className="my-2">
          Já possui conta?
          <Link href="/logar">
            <a style={{ color: 'crimson' }}> Entrar agora</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Cadastrar;
