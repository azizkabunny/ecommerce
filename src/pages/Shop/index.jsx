import React from 'react';
import { useSearchParams } from 'react-router-dom';
import productsData from '../../data/products.data';
import ProductCard from '../../components/cards/ProductCard';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  const filterProducts = (products) => {
    if (category) {
      return products.filter((item) => item.category === category);
    }
    if (search) {
      return products.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.includes(search.toLowerCase())
      );
    }
    return products;
  };
  return (
    <div>
      <div>
        {category && <p>Category: {category}</p>}
        {search && <p>Search: {search}</p>}
      </div>
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4'>
        <ProductCard />
      </div> */}
      <div className='grid grid-cols-3 gap-7 my-10'>
        {filterProducts(productsData).length ? (
          filterProducts(productsData).map((item) => (
            <ProductCard item={item} key={item.id} />
          ))
        ) : (
          <div className='m-10 text-center col-span-3'>No product found</div>
        )}
      </div>
    </div>
  );
};

export default Shop;
