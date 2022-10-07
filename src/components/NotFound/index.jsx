import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

const NotFound = () => (
  <div className="flex flex-col items-center justify-start h-full gap-1 pt-8 text-custom-darkgrey">
    <img src={logo} className="mb-5 w-[200px]" alt="logo du site edibles" />
    <div className="flex flex-col w-4/5 gap-4 px-4 mb-4 text-center bg-white shadow-md md:w-2/3 py-7 rounded-3xl bg-opacity-30">
      <h1 className="text-6xl font-bold">Oups !</h1>
      <p className="text-lg">
        {' '}
        Il semblerait que la page :
        {' '}
        <span className="font-bold">
          {window.location.pathname}
        </span>
        {' '}
        n&apos;existe pas sur nos serveurs.
      </p>
      <h3 className="text-lg">
        {' '}
        Code d&apos;erreur :
        {' '}
        <span className="font-bold">404</span>
      </h3>
      <div className="text-lg">
        <h2> Voici quelques liens utiles, peut-être, pas sur: </h2>
        <div className="flex flex-row justify-between m-2">
          <div className="flex flex-col ">
            <Link to="/" className="italic underline"> Page d&apos;accueil</Link>
            <Link to="/login" className="italic underline"> Se connecter </Link>
          </div>
          <div className="flex flex-col ">
            <Link to="/signup" className="italic underline"> S&apos;inscrire </Link>
            <Link to="/stock" className="italic underline"> Mes stocks</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
