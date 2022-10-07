import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { setProductField, addProductToStock } from '../../../redux/actions/product';

import FormAddProduct from '../FormAddProduct';
import Message from '../../Message';

const FormAddProductContainer = ({ code, pictureUrl, productName }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(setProductField(code, 'barCode'));
  dispatch(setProductField(productName, 'name'));
  dispatch(setProductField(pictureUrl, 'pictureUrl'));

  const quantity = useSelector((state) => state.product.quantity);
  const expirationDate = useSelector((state) => state.product.expirationDate);
  const stockId = useSelector((state) => state.product.stockId);
  const stocks = useSelector((state) => state.stock.userStocks);
  const error = useSelector((state) => state.product.errorMessage);
  const success = useSelector((state) => state.product.successMessage);

  const handleAddProduct = () => {
    dispatch(addProductToStock(history));
  };
  const changeField = (value, name) => {
    dispatch(setProductField(value, name));
  };
  return (
    <div className="flex flex-col gap-3 pt-6 text-lg justify-evenly">
      <p className="font-bold text-center">{productName}</p>
      {error && <Message align="text-center" color="text-red-800" size="text-base" content={error} />}
      {success && <Message align="text-center" color="text-green-800" size="text-base" content={success} />}
      <FormAddProduct
        quantity={quantity}
        expirationDate={expirationDate}
        changeField={changeField}
        handleAddProduct={handleAddProduct}
        stockId={stockId}
        stocks={stocks}
      />
    </div>
  );
};

FormAddProductContainer.propTypes = {
  productName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default FormAddProductContainer;
