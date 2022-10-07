import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import Modal from '../Modal';

import { toggleModal } from '../../redux/actions/interface';

const MoreDetailModal = ({ product, index }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Modal toggleModal={() => dispatch(toggleModal())} index={index}>
        <div className="flex flex-col xl:p-3 gap-4 text-lg max-h-[65vh]">
          <div className="flex justify-start gap-3">
            <img className="self-start object-contain w-16 h-40" src={product.image_front_url} alt={product.product_name} />
            <div className="pt-6">
              <h2 className="font-bold">
                {product.product_name}
              </h2>
              <h4>
                {product.brands}
              </h4>
              <p>
                {product.quantity || 'N/A'}
              </p>
            </div>
          </div>
          <div className="overflow-x-hidden overflow-y-scroll h-1/2">
            <h4 className="font-bold">Ingrédients :</h4>
            <p className="">
              {product.ingredients_text_fr || 'N/A'}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

MoreDetailModal.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.objectOf().isRequired,
};

export default MoreDetailModal;
