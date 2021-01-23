import React, { useContext } from 'react';
import Head from 'next/head';
import { DataContext } from '../store/GlobalState';
import CartItem from '../components/CartItem';

const Carrinho = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center ">
        <h2 className="text-danger">Não há compras</h2>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Página de carrinho</title>
      </Head>
      <div className="col-md-8 text-secondary table-responsive my3">
        <h2 className="text-uppercase">Carrinho de compras</h2>

        <table className="table my-3">
          <tbody>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                dispatch={dispatch}
                cart={cart}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
};
export default Carrinho;
