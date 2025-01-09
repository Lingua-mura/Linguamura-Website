import React from 'react';

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ color = "#8937CE", ...props }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            {...props}
        >
            <path d="M8.5 2V5" stroke="#6E7191" />
            <path d="M16.5 2V5" stroke="#6E7191" />
            <path d="M4 9.08984H21" stroke="#6E7191" />
            <path d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z" stroke="#6E7191" />
            <path d="M16.1947 13.6992H16.2037" stroke="#6E7191" />
            <path d="M16.1947 16.6992H16.2037" stroke="#6E7191" />
            <path d="M12.4955 13.6992H12.5045" stroke="#6E7191" />
            <path d="M12.4955 16.6992H12.5045" stroke="#6E7191" />
            <path d="M8.79431 13.6992H8.80329" stroke="#6E7191" />
            <path d="M8.79431 16.6992H8.80329" stroke="#6E7191" />
        </svg>
    );
  };
export default CalendarIcon;
  