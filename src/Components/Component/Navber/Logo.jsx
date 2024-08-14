import { faStudiovinari } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
      return (
            <div className='cursor-pointer font-bold font-Playfair md:text-3xl text-xl tracking-wide'>
                  <NavLink to='/' className='flex md:gap-2 gap-1' onClick={window.scrollY(0,0)}>
                        <span className='text-pink-600'>
                              <FontAwesomeIcon icon={faStudiovinari} />
                        </span>
                        <span className='text-slate-200'>ShiPt</span>
                  </NavLink>
            </div>
      );
};

export default Logo;
