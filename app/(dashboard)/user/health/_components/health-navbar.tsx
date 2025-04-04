"use client"

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const HousingNavbar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/user/health/', label: 'Healt Marketplace', icon: 'solar:bag-2-line-duotone'},
    { href: '#', label: 'Health Facilities', icon: 'ph:building-apartment'  },
    { href: '#', label: 'Health Blog & Articles', icon: 'lets-icons:notebook', stroke: '2px' },
  ];

  return (
    <nav className='py-4 bg-[#00BBBB] text-white overflow-x-auto no-scrollbar'>
      <ul className='container sm:px-4 px-2 flex justify-start items-center md:gap-4 flex-wrap w-full whitespace-nowrap min-w-max'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames(
                'flex justify-between items-center gap-2 rounded-full font-medium sm:text-[18px] text-xs no-underline px-3 py-2 p-2 transition-all duration-300 hover:bg-[hsl(180,65%,57%)]',
                {
                  'bg-[#9eeaea] text-[#4E4B66]': pathname?.startsWith(link.href),
                  'text-white': !pathname?.startsWith(link.href),
                }
              )}
            >
              <Icon icon={link.icon} width="24" height="24" stroke={link.stroke} className="h-8 w-8" />
              <span className="hidden sm:flex">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HousingNavbar;
