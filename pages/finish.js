import React, { useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';
import Link from 'next/link';

const finish = () => {
  useEffect(() => {
    localStorage.removeItem('__poke__cart');
  }, []);
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;

  const percents = modal.total * 10;
  const discount = percents / 100;

  return (
    <div className="row justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '500px' }}>
        <h5 className="card-header">OBRIGADO !!!</h5>
        <div className="card-body">
          <h5 className="card-title">
            Você ganhou de volta R${discount.toFixed(2)}
          </h5>
          <Link href="/">
            <a className="btn btn-dark">Voltar para o início</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default finish;

/*<div className="my-1 mx-auto">
      <h2>OBRIGADO!!!</h2>
      <p></p>
    </div>*/
