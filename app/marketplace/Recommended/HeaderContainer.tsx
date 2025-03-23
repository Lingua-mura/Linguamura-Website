import React from 'react';

interface HeaderContainerProps {
  title: string;
  linkText: string;
}

const HeaderContainer = ({ title, linkText }: HeaderContainerProps) => {
  return (
    <div className="header-container">
      <h3>{title}</h3>
      <a href="#" className="text-primary">
        {linkText}
      </a>
    </div>
  );
};

export default HeaderContainer;