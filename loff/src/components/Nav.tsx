import React from 'react'
import logo1 from '../logo-svg/logo-1.svg'
import logo2 from '../logo-svg/logo-2.svg'
import logo3 from '../logo-svg/logo-3.svg'
import logo4 from '../logo-svg/logo-4.svg'
import logo5 from '../logo-svg/logo-5.svg'
import logo6 from '../logo-svg/logo-6.svg'
import logo7 from '../logo-svg/logo-7.svg'
import logo8 from '../logo-svg/logo-8.svg'

import { randomNumber } from '../utils/common';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

function Nav() {
  const logoIndex = randomNumber(0, 7);
  return (
    <nav>
        <ul>
            <li>Serier</li>
            <li>Bassene</li>
            <li>Om Loff</li>
            <li>Shop</li>
        </ul>
        <div className='logoContainer'>
          <img src={logos[logoIndex]} alt="Logo" />
        </div>
    </nav>
  )
}

export default Nav