/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import MobileMenu from './MobileMenu';
import Overlay from './Overlay';
import Image from './Image';

export default function Header() {
  const [isMobileMenu, setIsMobieMenu] = useState(false);
  const is375px = useMediaQuery({query: '(max-width: 376px)'});

  function mobileMenuHandler() {
    setIsMobieMenu(preState => !preState);
  }

  const heroImage = is375px ? (
    <Image
      fileName="image-hero-mobile.jpg"
      altImage="monitor riser"
      classes="mobile-hero-image"
    />
  ) : (
    <Image
      fileName="image-hero-desktop.jpg"
      altImage="monitor riser"
      classes="desktop-hero-image"
    />
  );

  return (
    <header className="header-hero-wrapper">
      {heroImage}
      {isMobileMenu && <Overlay indexLayer="1" />}
      {isMobileMenu && <MobileMenu />}
      <div className="navbar">
        <Image fileName="logo.svg" altImage="logo" classes="logo" />
        {!isMobileMenu ? (
          <Image
            fileName="icon-hamburger.svg"
            altImage="hamburger menu"
            classes="navbar-mobile"
            onClick={mobileMenuHandler}
          />
        ) : (
          <Image
            fileName="icon-close-menu.svg"
            altImage="close menu"
            classes="navbar-mobile"
            onClick={mobileMenuHandler}
          />
        )}
        <nav className="navbar-desktop">
          <a href="#" className="navbar-desktop-link">
            about
          </a>
          <a href="#" className="navbar-desktop-link">
            discover
          </a>
          <a href="#" className="navbar-desktop-link">
            get started
          </a>
        </nav>
      </div>
    </header>
  );
}
