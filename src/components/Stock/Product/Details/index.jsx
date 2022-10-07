/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { AiFillEdit as EditIco } from '@react-icons/all-files/ai/AiFillEdit';

const Details = ({
  name, quantity, expirationDate, handleEdit,
}) => (
  <div className="flex flex-col w-full">
    <header className="flex items-center justify-between gap-3 px-3 py-1 text-base font-bold bg-custom-brown-2 font-ediblesBodyTitle">
      <span>{name}</span>
      <button type="button" onClick={handleEdit}>
        <EditIco size="1.6rem" />
      </button>
    </header>
    <div className="flex flex-col gap-1 p-3 text-base font-ediblesBody text-custom-darkgrey">
      <p><span className="font-bold">Quantité : </span>{quantity}</p>
      <p><span className="font-bold">Date de péremption&nbsp;: </span>{expirationDate}</p>
    </div>
  </div>
);

Details.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  expirationDate: PropTypes.instanceOf(Date).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Details;
