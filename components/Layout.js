import React from 'react';
import NavBar from './NavBar';
import Notify from './Notify';
import Modal from './Modal';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Notify />
        <Modal />
        {children}
      </div>
    </div>
  );
};

export default Layout;
