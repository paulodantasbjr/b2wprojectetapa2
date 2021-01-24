import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import { DataContext } from '../store/GlobalState';
import CartItem from '../components/CartItem';
import Link from 'next/link';

const Carrinho = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.quantity * item.data.price;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const handleClick = () => {
    dispatch({ type: 'ADD_CART', payload: { total } });
  };

  if (cart.length === 0) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center ">
        <h2 className="text-danger">Não há compras</h2>
      </div>
    );
  }

  return (
    <div className="row mx-auto">
      <Head>
        <title>Página de carrinho</title>
      </Head>
      <div className="col-md-8 text-secondary table-responsive my-3">
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

      <div className="col-md-4 my-3 text-end text-uppercase text-secondary">
        <h2>Compras</h2>
        <div className="mt-5">
          <h3>
            Total: <span className="text-danger">R${total} </span>
          </h3>
          <Link href={auth.user ? '/finish' : '/signin'}>
            <button onClick={handleClick} className="btn btn-dark my-2">
              Finalizar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Carrinho;
