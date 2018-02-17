import React, { Component } from 'react';
import {STATES} from "../consts";

class LearningPage extends Component {
  render() {
    return (
        <div>
            Strona Lernejska
            <button onClick={() => this.props.transferTo(STATES.TASK)}>
                juz umiem
            </button>
        </div>
    );
  }
}

export default LearningPage;
