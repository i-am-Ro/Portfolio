import React from "react";

const Footer = ({ islightmode }) => {
  return (
    <footer
      className={`w-full text-center py-6 mt-16 border-t transition-colors duration-500 ${
        islightmode
          ? " text-gray-700 border-gray-300"
          : " text-gray-400 border-gray-700"
      }`}
    >
      <p className="text-sm">
        © 2025 <span className="font-semibold text-blue-500">Rohit Mondal</span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
