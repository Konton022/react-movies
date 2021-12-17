import React from 'react';

const Header = () => {
	return (
		<nav className='light-blue darken-3'>
    		<div className="nav-wrapper">
      		<a href="#" className="brand-logo left">React Movies</a>
      		<ul id="nav-mobile" className="right">
        		<li><a href="#">Repo</a></li>
      		</ul>
    		</div>
  		</nav>
	);
}

export {Header};
