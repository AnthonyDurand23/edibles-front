import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Icons & Assets
import { AiFillQuestionCircle as MoreDetailsIco } from '@react-icons/all-files/ai/AiFillQuestionCircle';
import { AiFillPlusCircle as AddIco } from '@react-icons/all-files/ai/AiFillPlusCircle';
import defaultPicture from '../../../assets/img/no_preview.png';

// Actions
import { toggleModal } from '../../../redux/actions/interface';

const CardResearch = ({
  productName, pictureUrl, quantityProduct, index, addModalIndex,
}) => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(toggleModal(addModalIndex, true));
  };

  const handleMoreDetails = () => {
    dispatch(toggleModal(index, true));
  };
  return (
    <div className="flex justify-between w-full p-3 rounded-lg shadow-md bg-custom-brown-1">
      {pictureUrl && <img className="object-contain w-16 h-full md:object-cover md:w-[35%] md:rounded-2xl" src={pictureUrl} alt={`${productName} small front face`} />}
      {!pictureUrl && <img className="object-contain w-16 h-full lg:w-24" src={defaultPicture} alt="illustration non disponible" />}
      <div className="flex flex-col flex-grow h-full gap-2 px-3 md:w-[50%]">
        <h2 className="text-sm font-bold text-custom-darkgrey">{productName}</h2>
        <p className="text-sm text-gray-600">
          Quantité :
          <br />
          {quantityProduct || 'N/A' }
        </p>
      </div>
      <div className={`flex flex-col h-full gap-4 md:w-[15%] md:items-end ${isLogged ? 'justify-between' : 'justify-end'}`}>
        { isLogged && (
        <button type="button" className="text-custom-green-3" onClick={handleAdd}>
          <AddIco size="2rem" />
        </button>
        )}
        <button type="button" className="text-custom-green-4 justify-self-end" onClick={handleMoreDetails}>
          <MoreDetailsIco size="2rem" />
        </button>
      </div>
    </div>
  );
};

CardResearch.propTypes = {
  productName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  quantityProduct: PropTypes.string,
  index: PropTypes.number.isRequired,
  addModalIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

CardResearch.defaultProps = {
  quantityProduct: 'N/A',
};

export default CardResearch;

// <div className="relative z-0 flex flex-wrap m-2 rounded-lg bg-custom-brown-1">
//   <div className="flex w-full m-4">
//     <div className="flex items-center">
//       <img className="w-20 h-20" src={pictureUrl} alt={`${productName} small front face`} />
//       <div className="flex flex-col w-full p-4">
//         <h2 className="mb-2 text-sm font-bold text-gray-700">{productName}</h2>
//         <p className="text-sm text-gray-600 w-80">
//           Quantité :
//           {' '}
//           {quantityProduct || 'N/A' }
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center justify-end flex-1 flex-grow w-full">
//       { isLogged && <button type="button" className="absolute w-8 h-8 text-xl rounded-full top-2 right-2 text-custom-darkgrey bg-custom-green-4" onClick={handleAdd}>+</button>}
//       <button type="button" className="absolute w-8 h-8 text-xl rounded-lg bottom-2 right-2 text-custom-darkgrey bg-custom-green-3" onClick={handleMoreDetails}>...</button>
//     </div>
//   </div>
// </div>;
