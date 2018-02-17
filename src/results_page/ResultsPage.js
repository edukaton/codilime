import React, { Component } from 'react';
import {STATES} from "../consts";

class ResultsPage extends Component {
  render() {
    return (
        <div>
            Strona Results Page
            <button onClick={() => this.props.transferTo(STATES.TASK)}>
                chce inaczej
            </button>
            <button onClick={() => this.props.transferTo(STATES.START)}>
                ok dzieki
            </button>
        </div>
    );
  }
}

export default ResultsPage;
