import React from 'react';
import './sideNav.css';

const SideNav = () => {
  const [state, setState] = React.useState({ clicked: false });
  const handelClick = () => {
    setState({ clicked: !state.clicked });
    const nav = document.querySelector('nav');
    if (!state.clicked) {
      nav.classList.remove('hidden');
    } else {
      nav.classList.add('hidden');
    }
  };
  return (
    <header className="flex flex--column">
      <button type="button" onClick={handelClick} className="btn--menu">
        <i
          className={
            state.clicked ? 'ri-close-line ri-xl' : 'ri-menu-2-line ri-xl'
          }
        />
      </button>
      <nav className="flex flex--column hidden">
        <ul className="nav nav--side">
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default SideNav;
