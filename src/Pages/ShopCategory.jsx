import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Items from '../Components/Component/Items/Items';

const ShopCategory = (props) => {
      const { all_product } = useContext(ShopContext);

      return (
            <div className='pt-1'>
                  <div className=''>
                        <img src={props.banner} alt="" />
                        <div className='container pt-10 space-y-6'>
                              <div className='max-w-[90vw] mx-auto flex justify-center'>
                                    <h1 className='uppercase md:text-5xl text-lg font-bold text-gray-600 underline'>{props.category} Product</h1>
                              </div>
                              <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                                    {all_product.map((item) => {
                                          if (props.category === item.category) {
                                                return (
                                                      <Items
                                                            id={item.id}
                                                            key={item.id}
                                                            img={item.img}
                                                            name={item.name}
                                                            old_price={item.old_price}
                                                            new_price={item.new_price}
                                                      />
                                                );
                                          } else {
                                                return null;
                                          }
                                    })}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ShopCategory;
