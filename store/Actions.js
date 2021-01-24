export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  COLOR: 'COLOR',
  ELEMENT: 'ELEMENT',
  ADD_MODAL: 'ADD_MODAL',
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

  return {
    type: 'ADD_CART',
    payload: [...cart, { ...pokemon, img: img, data: data, quantity: 1 }],
  };
};

export const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.pokemon.name === id) item.quantity -= 1;
  });

  return { type: 'ADD_CART', payload: newData };
};

export const increase = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.pokemon.name === id) item.quantity += 1;
  });

  return { type: 'ADD_CART', payload: newData };
};

export const deleteItem = (data, id, type) => {
  const newData = data.filter((item) => item.pokemon.name !== id);
  return { type, payload: newData };
};
