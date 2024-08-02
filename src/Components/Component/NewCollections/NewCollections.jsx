import React from 'react';
import newCollections from '../../Assets/newCollections';
import Items from '../Items/Items';

const NewCollections = () => {
      return (
            <div className="container pt-12 space-y-4">
                  <div className="w-full flex flex-col items-center gap-2 ">
                        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-gray-600">New Collections</h1>
                        <div className='md:w-[20%] w-[25%] h-1 bg-gray-600'></div>
                  </div>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {
                              newCollections.map((item) => {
                                    return (
                                          <Items 
                                                key={item.id}
                                                id={item.id}
                                                img={item.img}
                                                name={item.name}
                                                old_price={item.old_price}
                                                new_price={item.new_price}
                                          />
                                    )
                              })
                        }
                  </div>
            </div>
      );
};

export default NewCollections;
