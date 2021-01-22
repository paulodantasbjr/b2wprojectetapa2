import { useState, useContext } from 'react';
import Head from 'next/head';
import PokemonItem from '../components/pokemon/PokemonItem';
import { DataContext } from '../store/GlobalState';

const Pokemon = ({ pokemonWater, pokemonFire }) => {
  const img = '/censored.jpg';

  const inicialState = {
    water: pokemonWater,
    fire: pokemonFire,
    inStock: 10,
    price: 25,
  };
  const [data, setData] = useState(inicialState);

  const { state } = useContext(DataContext);
  const { element } = state;

  return (
    <div className="pokemon">
      <Head>
        <title>Pokemons</title>
      </Head>
      {element.color === 'danger' ? (
        pokemonWater.pokemon.length === 0 ? (
          <h2>Não foi achado nenhum pokemon</h2>
        ) : (
          pokemonWater.pokemon.map((poke, index) => (
            <PokemonItem key={index} pokemon={poke} img={img} data={data} />
          ))
        )
      ) : (
        pokemonFire.pokemon.map((poke, index) => (
          <PokemonItem key={index} pokemon={poke} img={img} data={data} />
        ))
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const resFire = await fetch('https://pokeapi.co/api/v2/type/10');
  const pokemonFire = await resFire.json();

  const resWater = await fetch('https://pokeapi.co/api/v2/type/11');
  const pokemonWater = await resWater.json();

  return {
    props: {
      pokemonWater,
      pokemonFire,
    },
  };
};

export default Pokemon;
