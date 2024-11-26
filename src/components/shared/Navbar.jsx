import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="text-black">
            Hishabi
          </Link>
        </div>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden md:flex bg-black py-3 px-8 space-x-16 rounded-full">
          <li>
            <a href="#features" className="">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="">
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>

        {/* Authentication Buttons (Desktop) */}
        <div className=" md:flex space-x-4 ">
          <Link to="/login">
            <Button
              variant="outline"
              className="rounded-full px-6 border-black text-black hover:bg-black hover:text-white"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outline"
              className="rounded-full px-6 border-black text-black hover:bg-black hover:text-white"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}{" "}
            {/* Using icons from React Icons */}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Toggled by menuOpen state) */}
      {menuOpen && (
        <>
          {/* Overlay Background */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden transition-opacity duration-300"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar Menu */}
          <div
            className={`fixed inset-0 z-50 bg-gray-800 p-4 transition-transform transform md:hidden`}
            style={{
              transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.3s ease-in-out", // Ensure smooth transition
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl transition-transform duration-300"
              onClick={toggleMenu}
            >
              <FiX size={32} />
            </button>

            <ul className="space-y-4 text-center py-10 mt-10">
              <li>
                <a onClick={toggleMenu} href="#features" className="text-white">
                  Features
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#pricing" className="text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
