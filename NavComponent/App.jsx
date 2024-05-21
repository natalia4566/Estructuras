import React from 'react';
import NavComponent from './NavComponent';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function App() {
  return (
    <div>
      <NavComponent links={links} />
    </div>
  );
}

export default App;
