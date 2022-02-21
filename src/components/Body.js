import React, {useState} from 'react';
import SingleBacked from './SingleBacked';
import SingleProduct from './SingleProduct';
import Overlay from './Overlay';
import BackProjectModal from './BackProject';
import Image from './Image';
import {data} from '../store/data';

export default function Body() {
  const [isBackProject, setIsBackProject] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  function closeBackModalHandler() {
    setIsBackProject(preState => !preState);
  }
  function backProjectHandler() {
    setIsBackProject(prevState => !prevState);
  }
  function bookmarkHandler() {
    setIsBookmarked(prevState => !prevState);
  }

  const products = data.filter(prd => prd.pledge !== null);

  return (
    <React.Fragment>
      {isBackProject && <Overlay indexLayer="11" overlayColor="dark" />}
      {isBackProject && (
        <BackProjectModal closeHandler={closeBackModalHandler} />
      )}
      <main className="container">
        <section className="introduce round">
          <Image
            fileName="logo-mastercraft.svg"
            altImage="mastercraft logo"
            classes="mastercraft-logo"
          />
          <h2 className="introduce-title">mastercraft bamboo monitor riser</h2>
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
        <section className="backed round">
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
          <SingleBacked numberStr="56" text="days left" classes="backed-info" />
          <span className="backed-progress-bar"></span>
        </section>
        <section className="about round">
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
                classes={`${prd.left === 0 ? 'disabled ' : ''}product round`}
                title={prd.product}
                pledgePrice={prd.pledge}
                desc={prd.info}
                leftQty={prd.left}
              />
            );
          })}
        </section>
      </main>
    </React.Fragment>
  );
}
