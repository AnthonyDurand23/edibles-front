/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { RiCloseCircleLine as CloseIcon } from '@react-icons/all-files/ri/RiCloseCircleLine';

const Modal = ({
  children, toggleModal, index,
}) => {
  const modalRef = useRef();
  const isOpens = useSelector((state) => state.interface.isModalOpen[index]);

  const closeModal = () => {
    toggleModal(index, false);
  };

  const closeModalOutsideCLick = (event) => {
    if (modalRef.current === event.target) {
      toggleModal(index, false);
    }
  };
  const keyPress = useCallback((event) => {
    if (event.key === 'Escape' && isOpens) {
      toggleModal(index, false);
    }
  }, [isOpens, toggleModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  if (isOpens) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'initial';
  }
  return (

    <Portal node={document.getElementById('portal')}>
      <>
        {
        isOpens ? (
          <div
            ref={modalRef}
            onClick={closeModalOutsideCLick}
            className="fixed top-0 left-0 z-50 w-full h-full bg-black lg bg-opacity-60 backdrop-filter backdrop-blur-sm"
          >
            <div className="fixed w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 h-[fit-content] align-absolute z-50 justify-center items-center p-5 bg-custom-grey text-custom-darkgrey rounded-lg">
              <div className="flex">
                <button type="button" className="absolute top-0 right-0 p-3" onClick={closeModal}>
                  <CloseIcon size="2.3rem" />
                </button>
              </div>
              <div>
                {children}
              </div>
            </div>
          </div>
        ) : null
      }
      </>
    </Portal>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node,
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

Modal.defaultProps = {
  children: <> </>,
};
export default Modal;
