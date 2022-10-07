import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Form from './Form';
import Product from './Product';

// Actions
import { getProductsFromStock, clearDisplayedProducts } from '../../redux/actions/stock';

const Stock = () => {
  const dispatch = useDispatch();
  const currentStock = useSelector((state) => state.stock.currentStock);
  const defaultStock = useSelector((state) => state.stock.defaultStock);
  const stocks = useSelector((state) => state.stock.userStocks);
  const products = useSelector((state) => state.stock.productsDisplayed);

  useEffect(() => {
    dispatch(getProductsFromStock(currentStock.id));
    return function cleanup() { dispatch(clearDisplayedProducts()); };
  }, [currentStock.id]);

  const dynamicLayout = products.length >= 2 ? 'md:grid md:grid-cols-2 md:auto-rows-2/3' : '';
 
  return (
    <div className="flex flex-col w-full gap-4 px-6 py-4 md:items-center">
      <Form
        stocks={stocks}
        currentStock={currentStock}
        defaultStock={defaultStock}
        products={products}
      />
<div className={`flex flex-col gap-4 pb-4 ${dynamicLayout}`}>
  {products.map((product) => (
    <Product
      key={product.id}
      stocks={stocks}
      stockId={currentStock.id}
      {...product}
    />
  ))}
</div>
    </div>
  );
};

export default Stock;
