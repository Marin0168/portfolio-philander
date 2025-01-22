"use client";
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1 id='MerijnVanHien' onClick={() => window.location.href = '/'}><b>Merijn van Hien</b></h1>
      <ul>
        <li><a href="#about">Over mij</a></li>
        <li><a href="#projects">Projecten</a></li>
        {/* <li><a href="/contact">Contact</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
