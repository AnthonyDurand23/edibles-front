import React from 'react';
import PropTypes from 'prop-types';

const SuccessModal = ({ message, linkTo, leaveModal }) => {
  document.body.style.overflow = 'hidden';

  return (
    <>
      <div className="fixed top-0 left-0 z-[50] w-full h-full bg-custom-darkgrey bg-opacity-60 backdrop-filter backdrop-blur-sm" onClick={leaveModal} aria-hidden></div>
      <div className="fixed z-[50] w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3 py-6 px-4 align-absolute flex flex-col gap-4 justify-center bg-custom-grey rounded-2xl shadow-md">
        <span className="text-base text-center">{message}</span>
        <a href={linkTo} onClick={leaveModal} className="self-center inline-block w-3/4 p-2 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Connexion</a>
      </div>
    </>
  );
};

SuccessModal.propTypes = {
  message: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  leaveModal: PropTypes.func.isRequired,
};

SuccessModal.defaultProps = {
  linkTo: '/login',
};

export default SuccessModal;
