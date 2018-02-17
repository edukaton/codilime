import React, { Component } from 'react';
import { STATES } from './../consts';

class StartPage extends Component {
  render() {
    return (
        <div>
            Strona Start Page
            <button onClick={() => this.props.transferTo(STATES.LEARNING)}>
                dalej
            </button>
        </div>
    );
  }
}

export default StartPage;
