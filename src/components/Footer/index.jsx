import React from 'react';

import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="absolute bottom-0 flex items-center justify-between w-full h-10 px-12 mb-0 text-sm shadow-inner font-ediblesBodyTitle bg-custom-green-2 text-custom-darkgrey">
    <div className="w-full md:max-w-[900px] flex justify-between m-auto">
      <span>Edibles 2021</span>
      <div className="flex gap-10">
        <NavLink to="/contact" className="transition-all hover:transform hover:scale-110" activeClassName="text-custom-cream" exact>CONTACT</NavLink>
        <NavLink to="/about" className="transition-all hover:transform hover:scale-110" activeClassName="text-custom-cream" exact>A PROPOS</NavLink>
        <NavLink to="/legal" className="transition-all hover:transform hover:scale-110" activeClassName="text-custom-cream" exact>MENTIONS LEGALES</NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;
