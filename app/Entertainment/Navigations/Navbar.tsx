"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface NavbarProps {
  title: string;
  onSidebarToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, onSidebarToggle }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200 shadow-sm"
    >
      {/* Left Side: Title and Dropdown */}
      <div className="flex items-center space-x-2">
        <motion.h1
          className="text-lg font-semibold text-gray-800"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-1 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Icon icon="mdi:chevron-down" className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="flex items-center space-x-1">
          <Icon icon="mdi:world-wide-web" className="w-5 h-5 text-gray-600" />
          <select
            aria-label="Select language"
            className="bg-transparent border-none text-sm text-gray-700 outline-none cursor-pointer"
          >
            <option>English</option>
          </select>
        </div>

        {[
          { iconName: "mage:dots-menu", label: "Apps", onClick: onSidebarToggle },
          { iconName: "fluent:chat-16-regular", label: "History" },
          { iconName: "mdi:bell-outline", label: "Notifications" },
        ].map(({ iconName, onClick }, index) => (
          <motion.button
            key={index}
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="p-1 rounded-md text-gray-600 hover:bg-gray-100 transition-all ease-in-out duration-150"
          >
            <Icon icon={iconName} className="w-5 h-5" />
          </motion.button>
        ))}

        {/* User Avatar */}
        <Image
          src="/avatar_entertainment.svg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full m-2"
        />
      </div>
    </motion.header>
  );
};

export default Navbar;
