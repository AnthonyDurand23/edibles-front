import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import FormAddProductContainer from './FormAddProductContainer';
import { toggleModal } from '../../redux/actions/interface';

const ModalAddProduct = ({
  index, productName, pictureUrl, code,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Modal toggleModal={() => dispatch(toggleModal())} index={index}>
        <div className="">
          <FormAddProductContainer
            code={code}
            pictureUrl={pictureUrl}
            productName={productName}
          />
        </div>
      </Modal>
    </>
  );
};

ModalAddProduct.propTypes = {
  index: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default ModalAddProduct;
