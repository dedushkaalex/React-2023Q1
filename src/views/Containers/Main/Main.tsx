import React from 'react';
import Header from '../../Components/Header/Header';

type Props = Record<string, never>;

class MainContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div className="content">КОнтент</div>
      </>
    );
  }
}

export default MainContainer;
