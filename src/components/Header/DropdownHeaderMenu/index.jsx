/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { logoutUser } from '../../../redux/actions/user';

// Icons
import { FaUserCircle as UserMenuIcon } from '@react-icons/all-files/fa/FaUserCircle';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const name = useSelector((state) => state.user.user.firstname);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/');
    setOpen(!open);
  };

  return (
    <div className="relative">
      <UserMenuIcon className="relative z-40 py-3 icon-clamp text-custom-darkgrey" onClick={() => setOpen(!open)} />
      {open && (
      <ul className="absolute top-0 right-0 z-30 flex flex-col pt-24 overflow-hidden text-2xl text-center text-gray-600 w-72 rounded-b-3xl bg-custom-green-2">
        <li className="px-6 pb-8 text-3xl">Bonjour {name} !</li>
        <li><Link to="/user" className="inline-block w-full py-5 border-t-2 hover:bg-custom-green-1 border-custom-green-3" onClick={() => setOpen(!open)}>Mon profil</Link></li>
        <li><Link to="/stock" className="inline-block w-full py-5 border-t-2 border-b-2 hover:bg-custom-green-1 border-custom-green-3" onClick={() => setOpen(!open)}>Mes stocks</Link></li>
        <li><button type="button" className="self-end inline-block w-full py-6 text-xl font-bold hover:bg-custom-green-1" onClick={handleLogout}>Me déconnecter</button></li>
      </ul>
      )}
    </div>

  );
};

export default DropdownMenu;
