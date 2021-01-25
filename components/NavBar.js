import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie';

const NavBar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart, color } = state;

  const [selectColor, setSelectColor] = useState('danger');

  const handleChange = (e) => {
    setSelectColor(e.target.value);
    dispatch({
      type: 'ELEMENT',
      payload: { color: selectColor },
    });
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.name}
            style={{
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              transform: 'translateY(-3px)',
              marginRight: '3px',
            }}
          />
          {auth.user.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
          <div className="dropdown-divider"></div>
          <Link href={'/'}>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </li>
    );
  };

  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({ type: 'AUTH', payload: {} });
    dispatch({ type: 'NOTIFY', payload: { success: 'Desconectado' } });
  };

  //Verificar qual link recebera o className " active"
  const isActive = (resposta) => {
    if (resposta === router.pathname) {
      return ' active';
    } else {
      return '';
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-${
        selectColor === 'primary' ? 'primary' : 'danger'
      } px-3`}
    >
      <Link href="/">
        <a className="navbar-brand">B2WDesafio</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
        <div className="my-0 mx-auto ">
          <select value={selectColor} onChange={(e) => handleChange(e)}>
            {color.map((item, index) => (
              <option key={index} value={item.color}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <ul className="navbar-nav p-1">
            <li className="nav-item">
              <Link href="/cart">
                <a className={'nav-link' + isActive('/cart')}>
                  <i
                    className="fas fa-shopping-cart position-relative"
                    aria-hidden="true"
                  >
                    <span
                      className="position-absolute"
                      style={{
                        padding: '3px 6px',
                        background: '#FBE18F',
                        borderRadius: '50%',
                        top: '-10px',
                        right: '-10px',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      {cart.length}
                    </span>
                  </i>
                </a>
              </Link>
            </li>
            {Object.keys(auth).length === 0 ? (
              <li className="nav-item">
                <Link href="/signin">
                  <a className={'nav-link' + isActive('/signin')}>
                    <i className="fas fa-user" aria-hidden="true"></i> Entrar
                  </a>
                </Link>
              </li>
            ) : (
              loggedRouter()
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
