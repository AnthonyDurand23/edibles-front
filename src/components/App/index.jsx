import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';

// Actions
import { setToggleScan } from '../../redux/actions/scanner';
import { setToggleSearchbar, setToggleNavbar } from '../../redux/actions/interface';
import { getUserWithToken } from '../../redux/actions/user';
import { getUserStocks } from '../../redux/actions/stock';

// Components
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import BarcodeScanner from '../BarcodeScanner';
import SearchBarAPI from '../SearchBarAPI';
import ModalTemplate from '../ModalTemplate';
import MobileNavbar from '../MobileNavbar';

const App = () => {
  const isScanning = useSelector((state) => state.barcodeScanner.isScanning);
  const isSearchBarOpen = useSelector((state) => state.interface.isSearchBarOpen);
  const isNavbarOpen = useSelector((state) => state.interface.isNavbarOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getUserWithToken(token));
      dispatch(getUserStocks());
    }
  }, []);

  return (
    <>
      <Header />
      <Main />
      <MediaQuery minWidth={768}>
        <Footer />
      </MediaQuery>

      {isScanning
        && (
        <ModalTemplate setVisibilityFromState={() => dispatch(setToggleScan())}>
          <BarcodeScanner />
        </ModalTemplate>
        )}

      <MediaQuery maxWidth={767}>
        {isSearchBarOpen
        && (
        <ModalTemplate setVisibilityFromState={() => dispatch(setToggleSearchbar())}>
          <SearchBarAPI trigger autofocus rounded="rounded-full" fieldPaddingX="px-4" fieldPaddingY="py-1" formPadding="pt-[8vh]" width="w-[85vw]" placeholder="Recherche..." />
        </ModalTemplate>
        )}
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        {isNavbarOpen
        && (
        <ModalTemplate setVisibilityFromState={() => dispatch(setToggleNavbar())}>
          <MobileNavbar />
        </ModalTemplate>
        )}
      </MediaQuery>
    </>
  );
};

export default App;
