import React, { useContext } from 'react';
import { DataContext } from '../store/GlobalState';

const finish = () => {
  const { state } = useContext(DataContext);
  const { notify } = state;

  const percents = notify.total * 10;
  const discount = percents / 100;

  return (
    <div className="my-1 mx-auto">
      <h2>OBRIGADO!!!</h2>
      <p>Você ganhou de volta R${discount}</p>
    </div>
  );
};

export default finish;
