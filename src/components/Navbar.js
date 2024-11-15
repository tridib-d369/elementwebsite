import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-xl font-bold flex items-center gap-2"
            >
              <Beaker className="h-6 w-6" />
              Elements
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="hover:bg-[#172a46] px-3 py-2 rounded transition-colors"
              >
                 Hydrogen
              </Link>
              <Link
                to="/helium"
                className="hover:bg-[#172a46] px-3 py-2 rounded transition-colors"
              >
                 Helium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;