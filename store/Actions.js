export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  COLOR: 'COLOR',
  ELEMENT: 'ELEMENT',
};

export const addToCart = (pokemon, img, data, cart) => {
  if (data.inStock === 0) {
    return { type: 'NOTIFY', payload: { error: 'O pokemon esta esgotado' } };
  }

  const check = cart.every((item) => {
    return item.pokemon.url !== pokemon.pokemon.url;
  });

  if (!check)
    return {
      type: 'NOTIFY',
      payload: { error: 'Este pokemon já foi adicionado ao seu carrinho' },
    };
  console.log(cart);
  return {
    type: 'ADD_CART',
    payload: [...cart, { ...pokemon, img: img, data: data, quantity: 1 }],
  };
};
