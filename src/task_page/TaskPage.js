import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


import {STATES} from "../consts";
import Toolbox from "../components/Toolbox";
import VariableText from "../components/VariableText";
import { metricApply, metricUnApply} from "../toolLibrary";

class TaskPage extends Component {
    toolClickHandler = (tool) => {
      this.props.setState((state) => {
          return {
              appliedTools: {
                  ...state.appliedTools,
                  [tool]: !state.appliedTools[tool],
              },
              metrics: state.appliedTools[tool]? metricUnApply[tool](state.metrics) : metricApply[tool](state.metrics)
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
                <div className={'sliders'}>
                    Capslockatowosc: {mainState.metrics.A} <Slider value={mainState.metrics.A} disabled={true}/>
                    Zielonosc: {mainState.metrics.B} <Slider value={mainState.metrics.B} disabled={true}/>
                    Miekkosc: {mainState.metrics.C} <Slider value={mainState.metrics.C} disabled={true}/>
                </div>
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
