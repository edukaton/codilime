import React, { Component } from 'react';
import {STATES} from "../consts";
import Toolbox from "../components/Toolbox";
import VariableText from "../components/VariableText";

const INITIAL_STATE= {
    appliedTools: {},
};

class TaskPage extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
    }

    toolClickHandler = (tool) => {
        console.log(tool)
      this.props.setState((state) => {
          return {
              appliedTools: {
                  [tool]: true,
                  ...state.appliedTools
              },
          }
      })
  };

  render() {
      const { mainState } = this.props;

      return (
        <div className={'TaskPage'}>
            Strona Task Page
            <div className={'main'}>
                <div className={'text'}>
                    <VariableText
                        toolsState={mainState.appliedTools}
                    />
                </div>
                <div className={'side'}>
                    sidebar
                    <Toolbox
                        toolbox={mainState.toolbox}
                        onToolClick={(tool) => this.toolClickHandler(tool)}
                    />
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
