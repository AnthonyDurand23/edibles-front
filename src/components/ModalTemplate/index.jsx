/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import usePortal from 'react-cool-portal';
import PropTypes from 'prop-types';

const ModalTemplate = ({ setVisibilityFromState, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return function cleanup() { document.body.style.overflow = 'initial'; };
  }, []);
  const { Portal } = usePortal({
    onHide: () => {
      setVisibilityFromState();
    },
  });

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-custom-darkgrey bg-opacity-50 z-50 backdrop-filter backdrop-blur-sm">
      <Portal>
        {children}
      </Portal>
    </div>
  );
};

ModalTemplate.propTypes = {
  setVisibilityFromState: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalTemplate;
