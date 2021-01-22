import React, { useContext } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/Actions';

const PokemonItem = ({ pokemon, img, data }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={pokemon.pokemon.url} />
      <div className="card-body">
        <Link href={pokemon.pokemon.url}>
          <a className="card-text" style={{ fontSize: '12px' }}>
            {pokemon.pokemon.url}
          </a>
        </Link>
        <h5 className="card-title text-capitalize" title={pokemon.pokemon.name}>
          {pokemon.pokemon.name}
        </h5>

        <div className="d-flex justify-content-between p-1">
          <h6 className="text-danger">R${data.price}</h6>
          {data.inStock > 0 ? (
            <h6 className="text-danger">Estoque: {data.inStock}</h6>
          ) : (
            <h6 className="text-danger">Esgotado</h6>
          )}
        </div>
        <div className="row justify-content-between mx-0">
          <button
            className="btn btn-success"
            style={{ marginLeft: '5px', flex: 1 }}
            disabled={data.inStock === 0 ? true : false}
            onClick={() => dispatch(addToCart(pokemon, img, data, cart))}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
