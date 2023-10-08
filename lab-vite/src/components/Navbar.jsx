import ironhackLogo from '../assets/ironhack-logo-xs.png';
import menu from '../assets/menu-top-xs.png';

function Navbar() {
    return (
      <nav>
        <img id="nav-img" src={ironhackLogo} alt="logo"/>
        <img id="nav-img1" src={menu} alt="logo"/>
      </nav>
    );
  }
  
  export default Navbar;