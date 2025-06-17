// import React, { useState } from "react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900/90 backdrop-blur text-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo / Name */}
//         <a href="#home" className="font-bold text-2xl tracking-tight text-teal-400">
//           Salman.dev
//         </a>
//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 text-lg font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="hover:text-teal-400 transition-colors duration-200"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//         {/* Theme Toggle Placeholder */}
//         <button
//           className="hidden md:block ml-6 focus:outline-none"
//           title="Theme toggle placeholder"
//         >
//           <span className="text-xl">🌙</span>
//         </button>
//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="md:hidden flex items-center focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-7 h-7"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {menuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 8h16M4 16h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-900/95 px-4 pb-3 pt-2 shadow-lg">
//           <ul className="flex flex-col space-y-2 text-lg font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="block py-1 px-2 rounded hover:bg-gray-800 hover:text-teal-400 transition-colors duration-200"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//             {/* Theme Toggle Placeholder (Mobile) */}
//             <li>
//               <button
//                 className="w-full flex items-center gap-2 py-1 px-2 hover:bg-gray-800 rounded transition-colors duration-200"
//                 title="Theme toggle placeholder"
//               >
//                 <span className="text-xl">🌙</span>
//                 <span>Theme</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Extracurriculars", href: "#extracurriculars" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900/90 backdrop-blur text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="font-bold text-2xl tracking-tight text-teal-400">
          Salman.dev
        </a>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-teal-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Theme Toggle Placeholder (Removed as requested) */}
        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 px-4 pb-3 pt-2 shadow-lg">
          <ul className="flex flex-col space-y-2 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-1 px-2 rounded hover:bg-gray-800 hover:text-teal-400 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

