import { createContext, useReducer, useEffect } from 'react';
import reducers from './Reducers';
import { getData } from '../utils/fetchData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    color: [
      { color: 'danger', name: 'Fogo' },
      { color: 'primary', name: 'Água' },
    ],
    element: {},
    modal: {},
  };

  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    const __poke__cart = JSON.parse(localStorage.getItem('__poke__cart'));

    if (__poke__cart) dispatch({ type: 'ADD_CART', payload: __poke__cart });
  }, []);

  useEffect(() => {
    localStorage.setItem('__poke__cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      getData('auth/accessToken').then((res) => {
        if (res.err) return localStorage.removeItem('firstLogin');

        dispatch({
          type: 'AUTH',
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
