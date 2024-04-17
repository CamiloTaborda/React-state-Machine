import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {
  const goTowelcome = () => {
    send({ type: "CANCEL" })
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Book a fly ✈</h1>
      {!state.matches('inicial') &&
      <button onClick={goTowelcome} className='Nav-cancel button-secondary'>Cancelar</button>
      }
    </nav>
  );
};