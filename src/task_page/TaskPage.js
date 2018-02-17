import React, { Component } from 'react';
import {STATES} from "../consts";
import Toolbox from "../components/Toolbox";

class TaskPage extends Component {
  render() {
    return (
        <div className={'TaskPage'}>
            Strona Task Page
            <div className={'main'}>
                <div className={'text'}>Text</div>
                <div className={'side'}>
                    sidebar
                    <Toolbox></Toolbox>
                </div>
            </div>
            <div className={'bottom'}>
                Bottom
                <button onClick={() => this.props.transferTo(STATES.LEARNING)}>
                    wiecej info
                </button>
                <button onClick={() => this.props.transferTo(STATES.RESULTS)}>
                    sprawdz mi
                </button>
            </div>
        </div>
    );
  }
}

export default TaskPage;
