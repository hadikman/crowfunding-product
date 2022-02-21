import Wrapper from './Wrapper';
import Header from './Header';
import Body from './Body';

import '../scss/styles.scss';

document.title = 'Crowdfunding Product';

export default function Index() {
  return (
    <Wrapper>
      <div className="wrapper">
        <Header />
        <Body />
      </div>
    </Wrapper>
  );
}
