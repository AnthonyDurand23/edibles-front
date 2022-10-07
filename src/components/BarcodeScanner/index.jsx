import React, { useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Close button import
import { CgCloseO as CloseBtn } from '@react-icons/all-files/cg/CgCloseO';

// Actions
import { setScanFailure, setScanSuccess } from '../../redux/actions/scanner';
import { setCurrentSearchApiValue, setLoadingOffApi, resetCurrentSearchApiValue } from '../../redux/actions/openFoodFacts';
import { useOpenFoodFactAPI } from '../../hooks/useOpenFoodFactsAPI';

const BarcodeScanner = ({ facingMode, fps, aspectRatio }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const research = useSelector((state) => state.openFoodFacts.search);
  const fetchData = useOpenFoodFactAPI(research);
  const qrboxCoef = window.innerWidth > 1023 ? 0.4 : 1;
  const qrbox = Math.floor((window.innerWidth * 0.70) * qrboxCoef); // Dynamic math of the scan zone size

  useEffect(() => {
    if (research) {
      dispatch(setLoadingOffApi());
      fetchData();
      dispatch(setScanSuccess());
      dispatch(resetCurrentSearchApiValue());
      history.push('/product');
      return undefined;
    }
    // eslint-disable-next-line no-undef
    const scanner = new Html5Qrcode('scanner');
    const options = { fps, qrbox, aspectRatio };
    scanner
      .start({ facingMode }, options,
        (decodedData) => {
          dispatch(setCurrentSearchApiValue(decodedData));
        },
        (error) => {
          dispatch(setScanFailure(error));
        });
    return function cleanup() { scanner.stop(); };
  }, [research]);

  return (
    <div className="fixed z-50 w-10/12 m-auto overflow-hidden lg:w-2/3 xl:w-3/5 align-absolute rounded-3xl">
      <div id="scanner" className="w-full h-full"></div>
      <CloseBtn size="3rem" className="absolute top-0 right-0 m-4" onClick={() => dispatch(setScanSuccess())} />
    </div>
  );
};

BarcodeScanner.propTypes = {
  facingMode: PropTypes.string,
  fps: PropTypes.number,
  aspectRatio: PropTypes.number,
};

BarcodeScanner.defaultProps = {
  facingMode: 'environment',
  fps: 10,
  aspectRatio: 2.0,
};

export default BarcodeScanner;
