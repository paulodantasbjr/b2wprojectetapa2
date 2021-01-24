import React from 'react';
import Link from 'next/link';

const CartItem = ({ item }) => {
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
        <button className="btn btn-outline-secondary"> - </button>
        <span className="px-3">{item.quantity}</span>
        <button className="btn btn-outline-secondary"> + </button>
      </td>
      <td
        className="align-middle"
        style={{ minWidth: '50px', cursor: 'pointer' }}
      >
        <i className="fas fa-trash text-danger" aria-hidden="true"></i>
      </td>
    </tr>
  );
};

export default CartItem;
