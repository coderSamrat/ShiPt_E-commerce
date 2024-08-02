import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { faBars, faClose, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { ShopContext } from '../../../Context/ShopContext';

const Nav = () => {
      const Links = [
            { id: 1, to: '/', label: 'Shop' },
            { id: 2, to: '/mens', label: 'Men' },
            { id: 3, to: '/womens', label: 'Women' },
            { id: 4, to: '/kids', label: "Kid's" },
      ];

      return (
            <ul className='md:flex md:justify-between md:w-full font-[Poppins] text-lg gap-3 '>
                  {
                        Links.map((link) => {
                              return (
                                    <li key={link.id}>
                                          <NavLink to={link.to} className={({ isActive }) => `${isActive ? 'text-pink-600 font-bold uppercase' : 'text-white'} hover:text-pink-600 transition-colors duration-300`}>
                                                {link.label}
                                          </NavLink>
                                    </li>
                              );
                        })
                  }
            </ul>
      );
};

const Navlinks = () => {

      const [menuOpen, setMenuOpen] = useState(false);

      const handleMenuToggle = () => {
            setMenuOpen(!menuOpen);
      };

      const {getCartTotalItems} = useContext(ShopContext);

      return (
            <>
                  <nav className='flex justify-end w-1/3 items-center md:pb-0 pb-2'>
                        <div></div>
                        <div className='hidden w-full md:flex'>
                              <Nav />
                        </div>
                        <Link to="/signup" >
                              <Button>
                                    <FontAwesomeIcon icon={faUserAlt} />
                              </Button>
                        </Link>
                        <Link to="/cart" >
                              <div className='relative'>
                                    <Button>
                                          <FontAwesomeIcon icon={faOpencart} />
                                    </Button>
                                    <span className='absolute -top-1 right-2 bg-pink-600 rounded-full text-white text-xs font-bold px-1'>{getCartTotalItems()}</span>
                              </div>
                        </Link>

                        <div className='md:hidden text-2xl text-white'>
                              <button onClick={handleMenuToggle}>
                                    {menuOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                              </button>
                        </div>
                  </nav >

                  {
                        menuOpen && (
                              <div className='md:hidden w-full flex flex-col items-center basis-full pt-4 border-t border-teal-300 ' >
                                    <Nav />
                              </div>
                        )
                  }
            </>
      );
};
export default Navlinks;
