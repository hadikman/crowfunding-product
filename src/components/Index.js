/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Wrapper from './Wrapper';
import Image from './Image';
import MobileMenu from './MobileMenu';
import SingleProduct from './SingleProduct';
import SingleBacked from './SingleBacked';
import BackProjectModal from './BackProject';
import Overlay from './Overlay';
import {data} from '../store/data';

import '../scss/styles.scss';

document.title = 'Crowdfunding Product';

export default function Index() {
  const [isMobileMenu, setIsMobieMenu] = useState(false);
  const [isBackProject, setIsBackProject] = useState(false);
  const is375px = useMediaQuery({query: '(max-width: 376px)'});
  const [isBookmarked, setIsBookmarked] = useState(false);

  function mobileMenuHandler() {
    setIsMobieMenu(preState => !preState);
  }
  function backProjectHandler() {
    setIsBackProject(prevState => !prevState);
  }
  function closeBackModalHandler() {
    setIsBackProject(preState => !preState);
  }
  function bookmarkHandler() {
    setIsBookmarked(prevState => !prevState);
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

  const products = data.filter(prd => prd.pledge !== null);

  return (
    <Wrapper>
      <div className="wrapper">
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

        {isBackProject && <Overlay indexLayer="11" overlayColor="dark" />}
        {isBackProject && (
          <BackProjectModal closeHandler={closeBackModalHandler} />
        )}
        <main className="container">
          <section className="introduce">
            <Image
              fileName="logo-mastercraft.svg"
              altImage="mastercraft logo"
              classes="mastercraft-logo"
            />
            <h2 className="introduce-title">
              mastercraft bamboo monitor riser
            </h2>
            <p>
              A beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="btn-container">
              <button
                type="button"
                className="btn-primary"
                onClick={backProjectHandler}
              >
                Back this project
              </button>
              <button
                type="button"
                className={`${
                  isBookmarked ? 'bookmarked ' : ''
                }icon btn-bookmark`}
                onClick={bookmarkHandler}
              >
                <svg
                  className="icon-bookmark"
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                    <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                  </g>
                </svg>
                <span className={`text-bookmark`}>
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </span>
              </button>
            </div>
          </section>
          <section className="backed">
            <SingleBacked
              numberStr="$89,914"
              text="of $100,000 backed"
              classes="backed-info"
              divider={true}
            />
            <SingleBacked
              numberStr="5,007"
              text="total backers"
              classes="backed-info"
              divider={true}
            />
            <SingleBacked
              numberStr="56"
              text="days left"
              classes="backed-info"
            />
            <span className="backed-progress-bar"></span>
          </section>
          <section className="about">
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB stickss to be sorted under the stand.
            </p>
            {products.map(prd => {
              return (
                <SingleProduct
                  key={prd.product}
                  classes={`${prd.left === 0 ? 'disabled ' : ''}product`}
                  title={prd.product}
                  pledgePrice={prd.pledge}
                  desc={prd.info}
                  leftQty={prd.left}
                />
              );
            })}
          </section>
        </main>
      </div>
    </Wrapper>
  );
}
