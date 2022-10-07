/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { ImArrowLeft2 as GoBackIcon } from '@react-icons/all-files/im/ImArrowLeft2';

// Actions
import { setToggleNavbar } from '../../redux/actions/interface';
import { logoutUser } from '../../redux/actions/user';

import IconLink from './IconLink';

import logo from '../../assets/img/logo.png';

const MobileNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = useSelector((state) => state.user.isLogged);
  const name = useSelector((state) => state.user.user.firstname);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/');
    dispatch(setToggleNavbar());
  };

  return (
    <nav className="fixed top-0 bottom-0 left-0 z-50 flex flex-col justify-between w-4/5 bg-custom-green-3">
      <div className="flex justify-between">
        <GoBackIcon size="2.25rem" className="m-5 text-custom-cream" onClick={() => dispatch(setToggleNavbar())} />
        <IconLink route="/" additionalStyle="bg-custom-green-2 p-5 rounded-bl-xl" onClick={() => dispatch(setToggleNavbar())} />
      </div>
      <img src={logo} alt="logo de l'application edibles" className="self-center w-3/4 max-w-[15rem] drop-shadow-lg px-5" />
      {!isLogged && (
      <div className="flex flex-col gap-4 px-5">
        <IconLink route="/login" label="Se connecter" onClick={() => dispatch(setToggleNavbar())} />
        <IconLink route="/signup" label="S'inscrire" onClick={() => dispatch(setToggleNavbar())} />
      </div>
      )}
      {isLogged && (
      <div className="flex flex-col gap-6 px-5">
        <p className="self-center text-3xl">Bonjour {name} !</p>
        <IconLink route="/user" label="Mon profil" onClick={() => dispatch(setToggleNavbar())} />
        <IconLink route="/stock" label="Mes stocks" onClick={() => dispatch(setToggleNavbar())} />
      </div>
      )}
      <div className="flex flex-col gap-6 px-8 pb-8">
        {isLogged && <IconLink label="Se déconnecter" onClick={handleLogout} />}
        <IconLink route="/contact" label="Contact" onClick={() => dispatch(setToggleNavbar())} />
        <IconLink route="/about" label="A propos" onClick={() => dispatch(setToggleNavbar())} />
        <IconLink route="/legal" label="Mentions légales" onClick={() => dispatch(setToggleNavbar())} />
      </div>
    </nav>
  );
};

export default MobileNavbar;
