import {Fragment} from 'react';

export default function Backed({numberStr, text, divider, classes}) {
  return (
    <Fragment>
      <div className={classes}>
        <h4>{numberStr}</h4>
        <p>{text}</p>
      </div>
      {divider && <span className="backed-divider"></span>}
    </Fragment>
  );
}
