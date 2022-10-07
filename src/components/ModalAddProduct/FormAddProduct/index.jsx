import React from 'react';
import PropTypes from 'prop-types';
import { RiCalendar2Fill as CalendarIcon } from '@react-icons/all-files/ri/RiCalendar2Fill';
import { RiShoppingCartFill as QuantityIcon } from '@react-icons/all-files/ri/RiShoppingCartFill';
import { RiFoldersFill as StockIcon } from '@react-icons/all-files/ri/RiFoldersFill';

import Field from '../../Fields';

const FormAddProduct = ({
  quantity, expirationDate, changeField, handleAddProduct, stockId, stocks,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddProduct();
  };

  return (
    <div>
      <form className="flex flex-col gap-4 px-4 mb-4 bg-white shadow-md xl:w-9/12 xl:m-auto py-7 rounded-3xl bg-opacity-30" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between h-10 px-5 bg-white rounded-full">
          <QuantityIcon />
          <Field
            name="quantity"
            type="number"
            value={quantity}
            onChange={changeField}
            placeholder="Quantité"
            placeholderBehaviour="focus:placeholder-transparent"

          />
        </div>
        <div className="flex items-center justify-between h-10 px-5 bg-white rounded-full">
          <CalendarIcon />
          <Field
            name="expirationDate"
            type="date"
            value={expirationDate}
            onChange={changeField}
            placeholder="Date d'expiration"

          />
        </div>
        <div className="flex items-center justify-between h-10 px-5 bg-white rounded-full">
          <StockIcon />
          <select className="w-full bg-white rounded-full" name="stockId" value={stockId} onChange={(event) => changeField(parseInt(event.target.value, 10), 'stockId')}>

            <option value="" selected hidden>Choisir un stock</option>
            {
              stocks.map((stock) => (
                <option value={stock.id} key={stock.id}>
                  {stock.name}
                </option>
              ))
            }
          </select>
        </div>
        <button type="submit" className="self-center w-3/4 p-2 rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Ajouter au stock</button>
      </form>
    </div>
  );
};

FormAddProduct.propTypes = {
  quantity: PropTypes.string,
  expirationDate: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  stockId: PropTypes.number.isRequired,
  stocks: PropTypes.array.isRequired,
};

FormAddProduct.defaultProps = {
  quantity: '1',
};

export default FormAddProduct;
