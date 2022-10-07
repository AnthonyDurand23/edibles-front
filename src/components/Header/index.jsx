import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';

// Icons
import { CgMenu as MenuTrigger } from '@react-icons/all-files/cg/CgMenu';
import { IoSearchOutline as SearchBarTrigger } from '@react-icons/all-files/io5/IoSearchOutline';
import { IoCameraOutline as ScannerTrigger } from '@react-icons/all-files/io5/IoCameraOutline';

// Actions
import { setToggleNavbar, setToggleSearchbar } from '../../redux/actions/interface';
import { setToggleScan } from '../../redux/actions/scanner';

// Components
import SearchBarAPI from '../SearchBarAPI';
import DropdownMenu from './DropdownHeaderMenu';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isNavbarOpen = useSelector((state) => state.interface.isNavbarOpen);
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <header className="fixed top-0 z-50 w-full px-4 shadow-lg bg-custom-green-2 md:px-8">
      <div className="w-full max-w-[1024px] h-[10vh] md:h-[fit-content] m-auto flex items-center md:gap-10">
        <MediaQuery maxWidth={767}>
          {!isNavbarOpen
          && (
          <>
            <MenuTrigger className="pr-4 border-r-2 icon-clamp-m" onClick={() => dispatch(setToggleNavbar())} />
            <div className="flex gap-8 pl-6">
              <SearchBarTrigger className="icon-clamp-s text-custom-darkgrey" onClick={() => dispatch(setToggleSearchbar())} />
              <ScannerTrigger className="icon-clamp-sm text-custom-darkgrey" onClick={() => dispatch(setToggleScan())} />
            </div>
          </>
          )}
          {!isNavbarOpen && <h1 className="flex-grow h-auto pt-8 pb-2 leading-7 text-right text-shadow-l text-clamp font-ediblesLogo text-custom-darkgrey">edibles</h1>}
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Link to="/">
            <h1 className="h-auto pt-8 pb-2 text-6xl leading-7 text-left text-shadow-l font-ediblesLogo text-custom-darkgrey">edibles</h1>
          </Link>
          <SearchBarAPI trigger rounded="rounded-full" fieldPaddingX="px-4" fieldPaddingY="py-1" placeholder="Recherche..." />
          <ScannerTrigger className="relative z-40 icon-clamp text-custom-darkgrey" onClick={() => dispatch(setToggleScan())} />
          {!isLogged && (
          <div>
            {(location.pathname === '/login') && <Link to="/signup" className="px-4 py-1 text-xl transition-all rounded-full shadow-md bg-custom-green-4 text-custom-grey animate-pulse hover:bg-custom-green-3 hover:text-custom-darkgrey">Inscription</Link>}
            {(location.pathname !== '/login') && <Link to="/login" className="px-4 py-1 text-xl transition-all rounded-full shadow-md bg-custom-green-4 hover:bg-custom-green-3 hover:text-custom-darkgrey">Connexion</Link>}
          </div>
          )}
          {isLogged && <DropdownMenu />}
        </MediaQuery>
      </div>
    </header>
  );
};

export default Header;
