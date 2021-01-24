import React from 'react';
import Link from 'next/link';
import { decrease, increase } from '../store/Actions';

const CartItem = ({ item, dispatch, cart }) => {
  return (
    <tr>
      <td style={{ width: '100px', overflow: 'hidden' }}>
        <img
          src={item.img}
          alt={item.pokemon.name}
          className="img-thumbnail w-100"
          style={{ minWidth: '80px', height: '80px' }}
        />
      </td>

      <td style={{ minWidth: '200px' }} className="w-50 align-middle">
        <h5 className="text-capitalize text-secundary">
          <Link href={item.pokemon.name}>
            <a>{item.pokemon.name}</a>
          </Link>
        </h5>
        <h6 className="text-danger">R${item.quantity * item.data.price}</h6>
        {item.data.inStock > 0 ? (
          <p className="mb-1 text-danger">Estoque: {item.data.inStock} </p>
        ) : (
          <p className="mb-1 text-danger">Sem estoque</p>
        )}
      </td>
      <td className="align-middle" style={{ minWidth: '150px' }}>
        <button
          onClick={() => dispatch(decrease(cart, item.pokemon.name))}
          disabled={item.quantity === 1 ? true : false}
          className="btn btn-outline-secondary"
        >
          -
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          onClick={() => dispatch(increase(cart, item.pokemon.name))}
          disabled={item.quantity === item.data.inStock ? true : false}
          className="btn btn-outline-secondary"
        >
          +
        </button>
      </td>
      <td
        className="align-middle"
        style={{ minWidth: '50px', cursor: 'pointer' }}
      >
        <i
          style={{ fontSize: '22px' }}
          className="fas fa-trash text-danger"
          aria-hidden="true"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() =>
            dispatch({
              type: 'ADD_MODAL',
              payload: {
                data: cart,
                id: item.pokemon.name,
                title: item.pokemon.name,
              },
            })
          }
        ></i>
      </td>
    </tr>
  );
};

export default CartItem;
