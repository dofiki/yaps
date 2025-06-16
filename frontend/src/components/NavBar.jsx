import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { SiTheconversation } from "react-icons/si";
function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleHam = () => setMenuOpen(!isMenuOpen);
  
  const handleLinkClick = () => setMenuOpen(false);

  return (
<div className="fixed top-0 left-0 w-full z-50 bg-emerald-800 text-emerald-200">
      <div className="flex justify-around items-center h-14 px-4">
        <p className="text-3xl font-bold">
          <Link to="/" onClick={handleLinkClick} className="flex flex-row items-center gap-2 transition-colors duration-300 hover:text-emerald-100">
          <SiTheconversation size={25}/> yaps</Link>
        </p>

        <ul className="hidden sm:flex gap-5">
          <li><Link to="/" className="text-transition transition-colors duration-300 hover:text-emerald-100" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/blogs" className="text-transition transition-colors duration-300 hover:text-emerald-100" onClick={handleLinkClick}>Blogs</Link></li>
          <li><Link to="/create" className="text-transition transition-colors duration-300 hover:text-emerald-100" onClick={handleLinkClick}>Create</Link></li>
          <li><Link to="/onboarding" className="text-transition transition-colors duration-300 hover:text-emerald-100" onClick={handleLinkClick}>Login</Link></li>
        </ul>

        <GiHamburgerMenu
          size={24}
          className="block sm:hidden cursor-pointer"
          onClick={handleHam}
        />
      </div>

      <div
        className={`sm:hidden bg-emerald-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/blogs" onClick={handleLinkClick}>Blogs</Link></li>
          <li><Link to="/create" onClick={handleLinkClick}>Create</Link></li>
          <li><Link to="/onboarding" onClick={handleLinkClick}>Login</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;