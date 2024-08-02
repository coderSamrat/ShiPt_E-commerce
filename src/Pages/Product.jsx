import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Component/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/Component/ProductDisplay/ProductDisplay';

const Product = () => {
      const { all_product } = useContext(ShopContext);
      const { productId } = useParams();
      const products = all_product.find(item => item.id === Number(productId));
      return (
            <div>
                  <Breadcrums products={products} />
                  <ProductDisplay products={products} />
            </div>
      );
};

export default Product;
