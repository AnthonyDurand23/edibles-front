import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { IoSettingsSharp as SettingsIco } from '@react-icons/all-files/io5/IoSettingsSharp';

// Components
import StockUpdate from './StockUpdate';

// Actions
import {
  createNewStock, updateStock, deleteStock, toggleStockSettings, setCurrentStock, setRenamedStock, setNewStockName,
} from '../../../redux/actions/stock';

const Form = ({
  stocks, currentStock, defaultStock, products,
}) => {
  const dispatch = useDispatch();
  const isSettingsOpen = useSelector((state) => state.stock.isSettingsOpen);
  const renamedStock = useSelector((state) => state.stock.renamedStock);
  const newStockName = useSelector((state) => state.stock.newStockName);

  const handleChange = (event) => {
    const selected = event.target.selectedOptions[0];
    const parsedStock = {
      name: selected.value,
      id: selected.dataset.id,
    };
    dispatch(setCurrentStock(parsedStock));
  };

  return (
    <>
      <form className="flex flex-col w-full gap-3 px-4 py-4 text-xl md:w-4/6 lg:w-3/6 font-ediblesBody text-custom-darkgrey bg-custom-brown-2 bg-opacity-30 rounded-2xl" onChange={(event) => handleChange(event)}>
        <label htmlFor="stock" className="text-base font-bold leading-4">Sélectionnez un stock</label>
        <div className="flex justify-between w-full gap-4">
          <select className="w-full px-2 py-1 bg-white rounded-lg" id="stock" name="stock">
            {
              stocks.map((stock) => (
                <option key={stock.id} data-id={stock.id} value={stock.name} selected={stock.name === defaultStock.name}>{stock.name}</option>
              ))
            }
          </select>
          <button type="button">
            <SettingsIco size="1.7rem" onClick={() => dispatch(toggleStockSettings())} />
          </button>
        </div>
      </form>
      {isSettingsOpen
      && (
      <StockUpdate
        toggleModal={() => dispatch(toggleStockSettings())}
        setRenamedStock={(data) => dispatch(setRenamedStock(data))}
        setNewStockName={(data) => dispatch(setNewStockName(data))}
        proceedStockCreation={(name) => dispatch(createNewStock(name))}
        proceedStockUpdate={(id, name) => dispatch(updateStock(id, name))}
        proceedStockDeletion={() => dispatch(deleteStock(currentStock.id))}
        currentStock={currentStock}
        defaultStock={defaultStock}
        newStockName={newStockName}
        renamedStock={renamedStock}
        productsQuantity={products.length}
      />
      )}
    </>
  );
};

Form.propTypes = {
  stocks: PropTypes.array.isRequired,
  currentStock: PropTypes.object.isRequired,
  defaultStock: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

export default Form;
