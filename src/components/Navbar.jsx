import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown,Search } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleSearch(){
    setSearchActive(!searchActive);
  }

  function closeSearchonKey(event){
    if(event.key === "Enter"){
      setSearchActive(false)
    }
  }

  function controlText(event){
    setSearchTerm(event.target.value);
  }


  // Click outside to close dropdown & search bar
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       dropdownRef.current && !dropdownRef.current.contains(event.target) &&
  //       searchRef.current && !searchRef.current.contains(event.target)
  //     ) {
  //       setIsOpen(false);
  //       setSearchActive(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
  }
  document.addEventListener("mousedown",handleClickOutside);
    },[]);

  useEffect(() => {
    function handleClickOutside(event){
      if(!searchRef.current.contains(event.target)) {
        setSearchActive(false)
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
  },[]);

  return (
    <nav className="flex justify-center items-center gap-6 list-none">
    
      <li className="w-48">
        {
          searchActive ? (
            <div className="relative">
              <input 
              ref={searchRef}
              value={searchTerm}

              type="text"
              placeholder="Search Jobs..."
              className=" border border-gray-700 pl-2 py-1 pr-8 h-10 rounded-lg focus:outline-none w-full bg-white text-black"
              onKeyDown={closeSearchonKey}
              onChange={controlText}
            
            />
            <Search className="absolute w-4 h-4 right-2 top-1/2 transform -translate-y-1/2  text-blue-500" />
            </div>
            
            
          ): (
              <button onClick={handleSearch} className="hover:text-yellow-400 h-10 w-full transition-all duration-1000 cursor-pointer">Browse jobs</button>
            )
          }
      </li>
      {/* Dropdown Wrapper */}
      <div className="relative cursor-pointer " ref={dropdownRef}>
        <button
          onClick={toggleDropDown}
          className="flex items-center gap-1 hover:text-yellow-400 transition-all duration-1000 cursor-pointer"
        >
          Pages <ChevronDown className="text-gray-300" size={18} />
        </button>

        {isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-48 whitespace-nowrap transition-all duration-200 ease-in-out">
            <ul className="flex flex-col gap-2 p-3 text-black">
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Jobs Listing</Link>
              </li>
              <li>
                <Link to="/employer/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Employer Dashboard</Link>
              </li>
              <li>
                <Link to="/candidate/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Candidate Dashboard</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <li className="hover:text-yellow-400 transition-all duration-1000">
        <Link to="/contact">Contact</Link>
      </li>
    </nav>
  );
};

export default Navbar;
