import React from 'react';

interface SinglePersonIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const SinglePersonIcon: React.FC<SinglePersonIconProps> = ({ ...props }) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        {...props}
    >
        <path d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" stroke="#6E7191" />
        <path d="M21.0901 22C21.0901 18.13 17.2402 15 12.5002 15C7.76015 15 3.91016 18.13 3.91016 22" stroke="#6E7191" />
    </svg>
  );
};

export default SinglePersonIcon;
