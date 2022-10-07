import React from 'react';
import { useSelector } from 'react-redux';
import MoreDetailModal from '../MoreDetailModal';
import CardResearch from './Card_Research';
import ModalAddProduct from '../ModalAddProduct';

const SearchResults = () => {
  const results = useSelector((state) => state.openFoodFacts.results);
  const isLogged = useSelector((state) => state.user.isLogged);
  let dynamicLayout = '';
  if (results.length === 2) dynamicLayout = 'md:grid md:grid-cols-2 md:auto-rows-1/2';
  else if (results.length >= 3) dynamicLayout = 'md:grid md:grid-cols-2 md:auto-rows-1/2 lg:grid-cols-3';

  return (
    <div className={`flex flex-col flex-wrap w-full gap-4 p-4 mb-4 ${dynamicLayout}`}>
      {
        results.map((product, index) => (
          <React.Fragment key={product.code}>
            <CardResearch productName={product.product_name} pictureUrl={product.image_front_url} quantityProduct={product.quantity} index={index} addModalIndex={`addProduct-${index}`} />
            <MoreDetailModal product={product} index={index} />
            { isLogged && <ModalAddProduct index={`addProduct-${index}`} productName={product.product_name} pictureUrl={product.image_front_url} code={product.code} />}
          </React.Fragment>
        ))
    }
    </div>
  );
};

export default SearchResults;
