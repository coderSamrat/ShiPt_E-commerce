import React, { useContext } from 'react';
import CartItemsCard from './CartItemsCard';
import { ShopContext } from '../../../Context/ShopContext';
import { Link } from 'react-router-dom';

const CartProducts = () => {
      const { getCartTotalAmount, all_product, cartItems, resetCart } = useContext(ShopContext);
      const cartHasItems = all_product.some((e) => cartItems[e.id] > 0);
      const handleClick = () => {
            resetCart();
      }

      return (
            <div className="container pt-5">
                  <div className="pb-20">
                        <div className="w-full h-20 bg-[#F5F7F7] text-gray-600 hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
                              <h2 className="col-span-2">Product</h2>
                              <h2>Price</h2>
                              <h2>Quantity</h2>
                              <h2>Sub Total</h2>
                        </div>
                        <CartItemsCard />

                        {cartHasItems && (
                              <>
                                    <div className="w-full flex flex-col md:flex-row border py-4 px-4 items-center justify-between gap-2 md:gap-0 text-gray-600 mt-2">
                                          <form className="flex items-center gap-2 flex-wrap md:justify-start justify-center">
                                                <input
                                                      className="w-44 md:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                                                      type="text"
                                                      placeholder="Coupon Number"
                                                      required
                                                />
                                                <button className="text-sm md:text-base font-semibold h-8 px-4 text-gray-200 bg-rose-600 hover:bg-rose-700 transition-colors duration-300">
                                                      Apply Coupon
                                                </button>
                                          </form>
                                          <button
                                                
                                                className="lg:w-2/12 w-2/3 font-semibold text-lg py-3 text-gray-200 bg-gray-400 rounded-md hover:bg-gray-600 transition-colors duration-300" onClick={handleClick}
                                          >
                                                Reset Cart
                                          </button>
                                    </div>
                                    <div className="w-full gap-4 flex md:flex-row flex-col mt-5">
                                          <div className="md:w-2/4 w-full flex flex-col gap-3 text-gray-600">
                                                <h1 className="text-2xl font-semibold">Cart totals</h1>
                                                <div>
                                                      <p className="flex items-center justify-between border-gray-400 border-b pb-5 pt-1.5 text-lg px-2 font-medium">
                                                            Subtotal
                                                            <span className="font-semibold tracking-wide">
                                                                  &#8377;{getCartTotalAmount()}
                                                            </span>
                                                      </p>
                                                      <p className="flex items-center justify-between border-gray-400 border-b py-5 text-lg px-2 font-medium">
                                                            Shipping Charge
                                                            <span className="font-semibold tracking-wide">
                                                                  Free
                                                            </span>
                                                      </p>
                                                      <p className="flex items-center justify-between border-gray-400 py-5 text-lg px-2 font-bold">
                                                            Total
                                                            <span className="font-bold tracking-wide text-lg">
                                                                  &#8377;{getCartTotalAmount()}
                                                            </span>
                                                      </p>
                                                </div>
                                                <button className="lg:w-2/5 w-full font-semibold text-lg py-3 text-gray-200 bg-rose-600 rounded-md hover:bg-rose-700 transition-colors duration-300">
                                                      Proceed to Checkout
                                                </button>
                                          </div>
                                    </div>
                              </>
                        )}
                        <Link to='/'>
                              <div className='pt-5'>
                                    <button className="lg:w-2/12 w-full font-semibold text-lg py-3 text-gray-200 bg-gray-400 rounded-md hover:bg-gray-600 transition-colors duration-300">
                                          Continue Shopping
                                    </button>
                              </div>
                        </Link>
                  </div>
            </div>
      );
};

export default CartProducts;
