import React from 'react';
import ReactDOM from 'react-dom';

export default function MobileMenu() {
  const MobileMenu = () => {
    return (
      <div className="mobile-menu">
        <ul className="mobile-menu-links">
          <li>about</li>
          <li>discover</li>
          <li>get started</li>
        </ul>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <MobileMenu />,
        document.getElementById('mobile-menu')
      )}
    </React.Fragment>
  );
}
