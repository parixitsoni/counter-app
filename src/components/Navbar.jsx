import React from 'react';

const Navbar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-dark-light bg-dark text-light">
            <a href="parixitsoni.com" className='text-light m-1'>Counter
                <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
            </a>
        </nav>
     );
}

export default Navbar;