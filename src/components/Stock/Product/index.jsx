/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDate } from '../../../hooks/useDate';

// Components
import Details from './Details';
import EditableDetails from './EditableDetails';
import ModalTemplate from '../../ModalTemplate';

// Assets
import noPreviewImg from '../../../assets/img/no_preview.png';

// Actions
import {
  toggleEditMode, setNewProductData, saveProductModifications, toggleDeleteModal, deleteProduct,
} from '../../../redux/actions/stock';

const Product = ({
  id, name, url_picture, quantity, expiration_date, stockId, stocks,
}) => {
  const dispatch = useDispatch();
  const parsedDate = useDate(expiration_date);
  const editedProductID = useSelector((state) => state.stock.editedProductID);
  const newProductName = useSelector((state) => state.stock.newName);
  const newProductQuantity = useSelector((state) => state.stock.newQuantity);
  const newProductExpirationDate = useSelector((state) => state.stock.newExpirationDate);
  const newProductStockID = useSelector((state) => state.stock.newStockID);
  const isDeleteModalOpen = useSelector((state) => state.stock.isDeleteModalOpen);

  const saveModifications = () => {
    const modifications = {};
    modifications.name = newProductName || name;
    modifications.quantity = newProductQuantity || quantity;
    modifications.expirationDate = newProductExpirationDate || expiration_date;
    modifications.stockId = parseInt(newProductStockID, 10) || parseInt(stockId, 10);
    dispatch(saveProductModifications(editedProductID, modifications));
  };

  return (
    <div className="flex w-full overflow-hidden border-2 shadow-lg bg-opacity-60 bg-custom-green-3 rounded-xl border-custom-brown-2">
      {url_picture && <img className="object-contain w-2/6 p-2 bg-custom-brown-2" src={url_picture} alt={`illustration de ${name}`} />}
      {!url_picture && <img className="object-contain w-2/6 p-2 bg-custom-brown-2" src={noPreviewImg} alt="pas de visuel pour ce produit" />}
      {(!editedProductID || id !== editedProductID) && (
        <Details
          name={name}
          quantity={quantity}
          expirationDate={parsedDate}
          handleEdit={() => dispatch(toggleEditMode(id))}
        />
      )}
      {(editedProductID && id === editedProductID) && (
        <EditableDetails
          name={name}
          quantity={quantity}
          expirationDate={parsedDate}
          handleEdit={() => dispatch(toggleEditMode(id))}
          changeField={(value, name) => dispatch(setNewProductData(name, value))}
          newProductName={newProductName}
          newProductQuantity={newProductQuantity}
          newProductExpirationDate={newProductExpirationDate}
          stocks={stocks}
          saveModifications={saveModifications}
          toggleDeleteModal={() => dispatch(toggleDeleteModal())}
        />
      )}
      {(isDeleteModalOpen && id === editedProductID) && (
      <ModalTemplate setVisibilityFromState={() => dispatch(toggleDeleteModal())}>
        <div className="fixed z-50 w-3/4 p-3 text-lg xs:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 align-absolute bg-custom-brown-2 rounded-2xl">
          {(quantity > 1) && (
          <div className="flex flex-col items-center gap-2 text-center">
            <p>Il vous reste encore {quantity} unités de {name}.</p>
            <p>Tout supprimer ?</p>
          </div>
          )}
          {(quantity <= 1) && (
            <p className="text-center">Supprimer {name} ?</p>
          )}
          <div className="flex justify-around gap-2 pt-4">
            <button type="button" className="inline-block w-3/4 px-2 py-1 text-center rounded-xl bg-custom-green-2 text-custom-darkgrey highlight-none" onClick={() => dispatch(deleteProduct(editedProductID))}>Supprimer</button>
            <button type="button" className="inline-block w-3/4 px-2 py-1 text-center rounded-xl bg-custom-green-2 text-custom-darkgrey highlight-none" onClick={() => dispatch(toggleDeleteModal())}>Annuler</button>
          </div>
        </div>
      </ModalTemplate>
      )}
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  expiration_date: PropTypes.instanceOf(Date).isRequired,
  url_picture: PropTypes.string.isRequired,
  stockId: PropTypes.number.isRequired,
  stocks: PropTypes.array.isRequired,
};

export default Product;
