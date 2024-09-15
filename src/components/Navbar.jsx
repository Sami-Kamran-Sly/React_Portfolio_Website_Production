

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GrMailOption } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { GoProjectRoadmap } from "react-icons/go";
import { FaBars, FaTimes } from 'react-icons/fa';
import "../App.css";

function Navbar() {
  const [isTrue, setTrue] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [ismove, setMove] = useState(true);

  const closeLinks = () => {
    setTrue(false);
    setMove(false);
    setToggle(!toggle);
  };

  const openLink = () => {
    setToggle(!toggle);
    setMove(true);
    setTrue(true);
  };

  // Array of NavLink data
  const navLinks = [
    { path: "/", icon: <AiOutlineHome />, label: "Home" },
    { path: "/nexthome", icon: <AiOutlineHome />, label: "Next Home" },
    { path: "/about", icon: <LuUser2 />, label: "About" },
    { path: "/project", icon: <GoProjectRoadmap />, label: "Projects" },
    { path: "/contact", icon: <GrMailOption />, label: "Contact" },
  ];

  return (
    <div className="relative">
      <div className={ismove ? `moveNow moveItem z-50` : "moveNow"}>
        {toggle ? (
          <button onClick={openLink} className='nav-toggle'>
            <FaBars />
          </button>
        ) : (
          <button className='close-btn' onClick={closeLinks}>
            <FaTimes />
          </button>
        )}
      </div>
      <nav className={isTrue ? `navbar show-toggle` : "navbar"}>
        <ul className="ul-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                exact
                className="text-gray-300 hover:text-white"
              >
                {({ isActive }) => (
                  <div className={`box flex justify-center items-center gap-2  text-base ${isActive ? "box-active" : ""}`}>
                    {link.icon} 
                    <span>{link.label}</span>
                  </div>
                )}

               
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;







































// import React, { useState } from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
// import { GrMailOption } from "react-icons/gr";
// import { LuUser2 } from "react-icons/lu";
// import { GoProjectRoadmap } from "react-icons/go";
// import { FaBars, FaTimes,  } from 'react-icons/fa'
// import "../App.css";

// function Navbar() {
//   const [isTrue,setTrue] = useState(true)
//   const [toggle,setToggle] = useState(true)
//   const [ismove,setMove] = useState(true)


// const closeLinks = () => {
//     setTrue(false);
//     setMove(true)
//     setToggle(!toggle)
// };

// const openLink = ()=>{
//   setToggle(!toggle)
//   setMove(false)


//     setTrue(true);  


// }
//   return (
//     <div className=" relative ">
//     <div className={ismove ? ` moveNow  moveItem z-50 ` : "moveNow"}>



//       {toggle ? (
//         <button onClick={openLink} className='nav-toggle '>
//  <FaBars/>
//  </button>
//       ): (
        
//         <button className='close-btn' onClick={closeLinks}>
//         <FaTimes/>
//       </button>

// )}


     
//         </div>
//     <nav className={isTrue ? `navbar show-toggle `: "navbar"}>




//       <ul className="ul-links ">
//         <li>
//         <NavLink
//   to="/"
//   exact
//   activeClassName="text-white"
//   className="text-gray-300 hover:text-white"
//   isActive={(match, location) => location.pathname === "/"}
// >
//   <div className={`box ${window.location.pathname === "/" ? "box-active" : ""}`}>
//     <AiOutlineHome />
//   </div>



// </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/nexthome"
//             exact
//             activeClassName="text-white"
//             className="text-gray-300 hover:text-white"
//           >
//             <div className="box">
//               <AiOutlineHome />
//             </div>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             activeClassName="text-white"
//             className="text-gray-300 hover:text-white"
//           >
//             <div className="box">
//               <LuUser2 />
//             </div>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/project"
//             activeClassName="text-white"
//             className="text-gray-300 hover:text-white"
//           >
//             <div className="box">
//               <GoProjectRoadmap />
//             </div>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             activeClassName="text-white"
//             className="text-gray-300 hover:text-white"
//           >
//             <div className="box">
//               <GrMailOption />
//             </div>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//     </div>
//   );
// }

// export default Navbar;
