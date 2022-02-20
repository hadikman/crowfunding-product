import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Image from './Image';
import {data} from '../store/data';

export default function BackProjectModal(props) {
  const [selectedPledge, setSelectedPledge] = useState(null);
  const [pledgeInput, setPledgeInput] = useState(null);
  const [submitedPledge, setSubmitedPledge] = useState(false);
  let component;

  function closeModalHandler() {
    props.closeHandler();
  }
  function pledgeInputHandler(e) {
    setPledgeInput(e.target.value);
  }
  function submitPledgeHandler() {
    pledgeInput > 0 ? setSubmitedPledge(true) : setSubmitedPledge(false);
  }

  const is375 = useMediaQuery({query: '(max-width: 376px'});

  component = (
    <div className="back-project-modal">
      <div className="header">
        <h3>Back This Project</h3>
        <span className="icon close" onClick={closeModalHandler}>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fillRule="evenodd"
              opacity=".4"
            />
          </svg>
        </span>
      </div>
      <p className="header-info">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      {data.map((prd, index) => {
        return (
          <section
            key={prd.product}
            className={`${prd.left === 0 ? 'disabled ' : ''}${
              index === selectedPledge ? 'active ' : ''
            }pledge-single`}
          >
            <div className="pledge-header">
              <label className="input-wrapper">
                <input
                  type="radio"
                  className="pledge-radio-btn"
                  name="pledge"
                  id={`pledge-item-${index}`}
                  data-index={index}
                  value={prd.product}
                  onChange={() => setSelectedPledge(index)}
                  disabled={prd.left === 0}
                />
                <span className="checkmark"></span>
              </label>
              <div className="label-wrapper">
                <label
                  htmlFor={`pledge-item-${index}`}
                  className={prd.pledge === null ? 'no-reward' : ''}
                >
                  {prd.product}
                </label>
                {prd.pledge !== null && (
                  <label htmlFor={`pledge-item-${index}`}>
                    Pledge ${prd.pledge} or more
                  </label>
                )}
                {!is375 && prd.left !== null && (
                  <p>
                    <span>{prd.left}</span>left
                  </p>
                )}
              </div>
            </div>
            <p>{prd.info}</p>
            {is375 && prd.left !== null && (
              <p>
                <span>{prd.left}</span>left
              </p>
            )}
            {selectedPledge === index && (
              <React.Fragment>
                <hr />
                <div className="enter-pledge">
                  <p>Enter your pledge</p>
                  <div className="enter-pledge-inputs">
                    <label>
                      $<input type="number" onChange={pledgeInputHandler} />
                    </label>
                    <button
                      className="btn-primary"
                      onClick={submitPledgeHandler}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </section>
        );
      })}
    </div>
  );

  if (submitedPledge) {
    component = (
      <div className="back-project-modal success-modal">
        <Image
          fileName="icon-check.svg"
          altImage="close modal"
          classes="icon-success"
        />
        <h3>Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="btn-primary" onClick={closeModalHandler}>
          Got it!
        </button>
      </div>
    );
  }

  return component;
}
