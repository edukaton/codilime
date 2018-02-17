import React, { Component } from 'react';
import {STATES} from "../consts";
import Toolbox from "../components/Toolbox";

class LearningPage extends Component {
  render() {
    return (
        <div className={'LearningPage'}>
            Strona Lernejska
            <div className={'main'}>
                <div className={'text'}>Text</div>
                <div className={'side'}>
                    sidebar
                    <Toolbox></Toolbox>
                </div>
            </div>
            <div>
                <button onClick={() => this.props.transferTo(STATES.TASK)}>
                    juz umiem
                </button>
            </div>
        </div>
    );
  }
}

export default LearningPage;
