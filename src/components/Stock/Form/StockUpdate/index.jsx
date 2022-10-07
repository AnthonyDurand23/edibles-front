/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import ModalTemplate from '../../../ModalTemplate';

const StockUpdate = ({
  toggleModal, currentStock, defaultStock, newStockName, renamedStock, setRenamedStock, setNewStockName, productsQuantity, proceedStockUpdate, proceedStockCreation, proceedStockDeletion,
}) => {
  const [rename, setRename] = useState(false);
  const [drop, setDrop] = useState(false);
  const [create, setCreate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.name === 'stockRename') proceedStockUpdate(currentStock.id, renamedStock);
    if (event.target.name === 'stockCreate') proceedStockCreation(newStockName);
  };

  return (
    <ModalTemplate setVisibilityFromState={toggleModal}>
      <div className="fixed z-50 w-3/4 p-5 text-xl xs:w-8/12 md:w-1/2 lg:w-2/5 xl:w-80 align-absolute bg-custom-grey rounded-xl text-custom-darkgrey">
        <div className="flex flex-col items-center gap-3">
          <h2 className="w-full pb-2 text-3xl font-bold text-center uppercase border-b-2 border-custom-green-4">{create ? newStockName : currentStock.name}</h2>
          {!rename && !drop && !create
              && <button type="button" className="inline-block w-full p-2 text-center rounded-lg bg-custom-green-2 highlight-none" onClick={() => setRename(true)}>Renommer le stock</button>}
          {rename
              && (
              <form className="w-full" name="stockRename" onSubmit={(event) => handleSubmit(event)}>
                <label className="flex flex-col gap-2">
                  Ce stock va s&apos;appeler :
                  <input
                    type="text"
                    name="newStockName"
                    className="px-2 py-1 rounded-lg"
                    value={renamedStock}
                    autoFocus
                    onChange={(event) => setRenamedStock(event.target.value)}
                  />
                </label>
                <div className="flex justify-between gap-3 pt-4">
                  <button type="submit" className="w-full px-3 py-1 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Valider</button>
                  <button type="button" className="w-full px-3 py-1 text-center rounded-lg bg-custom-brown-2 text-custom-grey highlight-none" onClick={() => setRename(false)}>Annuler</button>
                </div>
              </form>
              )}
          {(!drop && !rename && !create && (currentStock.id != defaultStock.id))
              && <button type="button" className="self-center inline-block w-full p-2 text-center border-b-2 rounded-lg bg-custom-green-2 highlight-none" onClick={() => setDrop(true)}>Supprimer le stock</button>}
          {drop && (
          <div className="text-center">
            {productsQuantity ? <p>Ce stock contient encore {productsQuantity} produit(s). Le supprimer entraînera également la suppression des produits. Continuer ?</p> : ''}
            {!productsQuantity && <p>Confirmer la suppression du stock ?</p>}
            <div className="flex justify-between gap-3 pt-4">
              <button type="button" className="w-full px-3 py-1 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none" onClick={proceedStockDeletion}>Supprimer</button>
              <button type="button" className="w-full px-3 py-1 text-center rounded-lg bg-custom-brown-2 text-custom-grey highlight-none" onClick={() => setDrop(false)}>Annuler</button>
            </div>
          </div>
          )}
          {(!create && !drop && !rename)
              && <div className="w-full pt-4 border-t-2 border-custom-green-4"><button type="button" className="self-center inline-block w-full p-2 text-center rounded-lg bg-custom-green-2 highlight-none" onClick={() => setCreate(true)}>Créer un nouveau stock</button></div>}
          {create
              && (
              <form className="w-full" name="stockCreate" onSubmit={(event) => handleSubmit(event)}>
                <label className="flex flex-col gap-2">
                  Ce stock va s&apos;appeler :
                  <input
                    type="text"
                    name="newStockName"
                    className="px-2 py-1 rounded-lg"
                    value={newStockName}
                    autoFocus
                    onChange={(event) => setNewStockName(event.target.value)}
                  />
                </label>
                <div className="flex justify-between gap-3 pt-4">
                  <button type="submit" className="w-full px-3 py-1 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Valider</button>
                  <button type="button" className="w-full px-3 py-1 text-center rounded-lg bg-custom-brown-2 text-custom-grey highlight-none" onClick={() => setCreate(false)}>Annuler</button>
                </div>
              </form>
              )}
        </div>
      </div>
    </ModalTemplate>
  );
};

StockUpdate.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  currentStock: PropTypes.object.isRequired,
  defaultStock: PropTypes.object.isRequired,
  newStockName: PropTypes.string.isRequired,
  renamedStock: PropTypes.string.isRequired,
  productsQuantity: PropTypes.number.isRequired,
  setRenamedStock: PropTypes.func.isRequired,
  setNewStockName: PropTypes.func.isRequired,
  proceedStockCreation: PropTypes.func.isRequired,
  proceedStockDeletion: PropTypes.func.isRequired,
  proceedStockUpdate: PropTypes.func.isRequired,
};

export default StockUpdate;
