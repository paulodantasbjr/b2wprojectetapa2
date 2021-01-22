import React from 'react';
import NavBar from './NavBar';
import Notify from './Notify';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Notify />
        {children}
      </div>
    </div>
  );
};

export default Layout;
