/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { MdSettingsBackupRestore as AbortIco } from '@react-icons/all-files/md/MdSettingsBackupRestore';
import { MdDelete as DeleteIco } from '@react-icons/all-files/md/MdDelete';

// Components
import Field from '../../../Fields';

const EditableDetails = ({
  name, quantity, handleEdit, changeField, newProductName, newProductQuantity, newProductExpirationDate, stocks, saveModifications, toggleDeleteModal,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    saveModifications();
    handleEdit();
  };

  return (
    <form className="flex flex-col w-full md:justify-between" onSubmit={(event) => handleSubmit(event)}>
      <header className="flex items-center justify-between gap-3 py-1 pr-3 text-base font-bold bg-custom-brown-2 font-ediblesBodyTitle">
        <Field
          name="newName"
          value={newProductName}
          placeholder={name}
          onChange={changeField}
        />
        <button type="button" onClick={handleEdit}>
          <AbortIco size="1.8rem" />
        </button>
      </header>
      <div className="flex flex-col gap-1 p-3 text-base font-ediblesBody text-custom-darkgrey">
        <label className="flex gap-3 font-bold">Quantité&nbsp;:
          <input
            name="newQuantity"
            placeholder={quantity}
            value={newProductQuantity}
            type="number"
            className="w-16 pl-2 rounded-md"
            onChange={(event) => changeField(event.target.value, event.target.name)}
          />
        </label>
        <label className="flex flex-wrap items-center gap-3 font-bold">Date de péremption&nbsp;:
          <input
            name="newExpirationDate"
            value={newProductExpirationDate}
            type="date"
            className="pl-2 rounded-md"
            onChange={(event) => changeField(event.target.value, event.target.name)}
          />
        </label>
        <label className="flex flex-wrap items-center gap-3 font-bold">Changer de stock&nbsp;:
          <select
            name="newStockID"
            className="pl-2 rounded-md"
            onChange={(event) => changeField(event.target.selectedOptions[0].dataset.id, event.target.name)}
          >
            <option>Selectionnez un stock</option>
            {
            stocks.map((stock) => (
              <option key={stock.id} data-id={stock.id} value={stock.name}>{stock.name}</option>
            ))
            }
          </select>
        </label>
      </div>
      <div className="flex justify-between px-3 py-2">
        <button type="submit" className="px-3 text-base font-bold rounded-lg bg-custom-grey text-custom-darkgrey">Enregistrer</button>
        <button type="button" onClick={toggleDeleteModal}>
          <DeleteIco size="2.2rem" className="text-red-600" />
        </button>
      </div>
    </form>
  );
};

EditableDetails.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  newProductName: PropTypes.string.isRequired,
  newProductQuantity: PropTypes.number.isRequired,
  newProductExpirationDate: PropTypes.instanceOf(Date).isRequired,
  saveModifications: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  stocks: PropTypes.array.isRequired,
};

export default EditableDetails;
