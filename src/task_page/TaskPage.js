import React, { Component } from 'react';
import {STATES} from "../consts";

class TaskPage extends Component {
  render() {
    return (
        <div>
            Strona Task Page
            <button onClick={() => this.props.transferTo(STATES.LEARNING)}>
                wiecej info
            </button>
            <button onClick={() => this.props.transferTo(STATES.RESULTS)}>
                sprawdz mi
            </button>
        </div>
    );
  }
}

export default TaskPage;
