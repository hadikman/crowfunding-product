import React, {useState} from 'react';
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

  component = (
    <div className="back-project-modal">
      <div className="header">
        <h3>Back This Project</h3>
        <Image
          fileName="icon-close-modal.svg"
          altImage="close modal"
          classes="icon-close-menu"
          onClick={closeModalHandler}
        />
      </div>
      <p className="header-info">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      {data.map((prd, index) => {
        return (
          <section
            key={prd.product}
            className={`${prd.left === 0 ? 'disabled' : ''} ${
              index === selectedPledge ? 'active' : ''
            } pledge-single`}
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
              </div>
            </div>
            <p>{prd.info}</p>
            {prd.left !== null ? (
              <p>
                <span>{prd.left}</span>left
              </p>
            ) : (
              ''
            )}
            {selectedPledge === index && (
              <React.Fragment>
                <div className="enter-pledge">
                  <hr />
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
        <Image fileName="icon-check.svg" altImage="close modal" />
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
