import React, { Component } from 'react';
import { STATES } from './../consts';

class StartPage extends Component {
  render() {
    const { mainState } = this.props;

    return (
        mainState.username ?
            <div>
                Strona Start Page
                <button onClick={() => this.props.transferTo(STATES.LEARNING)}>
                    dalej
                </button>
            </div>
            :
            <div>
                Podej no imie
            </div>
    );
  }
}

export default StartPage;
