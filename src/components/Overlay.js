import React from 'react';
import ReactDOM from 'react-dom';

export default function Overlay({indexLayer, overlayColor, children}) {
  const color =
    overlayColor === 'dark'
      ? `hsla(0, 0%, 5%, 0.8)`
      : `linear-gradient(to bottom, hsla(0, 0%, 5%, 0.8), hsla(0, 0%, 95%, 0.5))`;
  const Overlay = () => {
    return (
      <div className="overlay" style={{zIndex: indexLayer, background: color}}>
        {children}
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay'))}
    </React.Fragment>
  );
}
