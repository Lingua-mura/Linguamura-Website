"use client"

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const HousingNavbar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/housing/apartments', label: 'Apartments', icon: 'ph:building-apartment' },
    { href: '/housing/hotels', label: 'Hotels', icon: 'mingcute:hotel-line' },
    { href: '/housing/properties', label: 'Properties', icon: 'qlementine-icons:home-24', stroke: '2px' },
  ];

  return (
    <nav className='py-4 bg-[#00BBBB] text-white overflow-x-auto no-scrollbar'>
      <ul className='container px-4 flex justify-start items-center gap-4 whitespace-nowrap min-w-max'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames(
              'flex justify-between items-center gap-2 rounded-full font-medium text-[18px] no-underline px-3 py-2 p-2 transition-all duration-300 hover:bg-[hsl(180,65%,57%)]',
              {
                'bg-[#9eeaea] text-[#4E4B66]': pathname?.startsWith(link.href),
                'text-white': !pathname?.startsWith(link.href),
              }
              )}
            >
              <Icon icon={link.icon} width="24" height="24" stroke={link.stroke} />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HousingNavbar;