import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Modal from 'react-modal';
import Popover from 'react-popover';

import Logo from "../components/logo";
import {modalStyle, STATES} from "../consts";
import Toolbox from "../components/Toolbox";
import VariableText from "../components/VariableText";
import {metricApply, metricUnApply} from "../toolLibrary";

class TaskPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    toolClickHandler = (tool) => {
        this.props.setState((state) => {
            return {
                activeTool: state.activeTool === tool ? false : tool,
            }
        })
    };

    textClickHandler = (id, active) => {
        if (active) {
            this.props.setState((state) => {
                const tool = state.activeTool || state.appliedTools[id];

                return {
                    activeTool: false,
                    appliedTools: {
                        ...state.appliedTools,
                        [id]: state.appliedTools[id] === tool ? false : tool,
                    },
                    metrics: state.appliedTools[id] === tool ?
                        metricUnApply[tool](state.metrics) : metricApply[tool](state.metrics)
                }
            })
        }
    };

    render() {
        const {mainState} = this.props;

        return (
            <div className={'TaskPage'}>
                <div className={'head'}>

                    <div className={'navText'} onClick={() => this.props.transferTo(STATES.LEARNING)}>
                        <div className={'circle'}>{'<'}</div>DO ROZGRZEWKI</div>
                    <div className={'title'}>
                        <Popover
                            isOpen={!mainState.modalHidden}
                            preferPlace={'below'}
                            onOuterAction={() => this.props.setState({modalHidden:true})}
                            body={mainState.modalBody}>
                            <Logo/>
                        </Popover>
                        INFOTOSTER.tostowanie
                    </div>
                </div>
                <div className={'main'}>
                    <div className={'text'}>
                        <VariableText
                            activeTool={mainState.activeTool}
                            toolsState={mainState.appliedTools}
                            chunkClick={this.textClickHandler}
                        />
                    </div>
                    <div className={'side'}>
                        <Toolbox
                            toolbox={mainState.toolbox}
                            activeTool={mainState.activeTool}
                            onToolClick={(tool) => this.toolClickHandler(tool)}
                        />
                    </div>
                </div>
                <div className={'bottom'}>
                    <div className={'sliders'}>
                        <div className={'metric-A'}>
                            Klikalność: {mainState.metrics.A} <Slider value={mainState.metrics.A} disabled={true}/>
                        </div>
                        <div className={'metric-B'}>
                            Prawdziwość: {mainState.metrics.B} <Slider value={mainState.metrics.B} disabled={true}/>
                        </div>
                        <div className={'metric-C'}>
                            Manipulacja: {mainState.metrics.C} <Slider value={mainState.metrics.C} disabled={true}/>
                        </div>
                        <div className={'metric-D'}>
                            Zaufanie: {mainState.metrics.D} <Slider value={mainState.metrics.D} disabled={true}/>
                        </div>
                    </div>
                    <div className={'buttons'}>
                        <button onClick={() => this.props.transferTo(STATES.RESULTS)}>
                            TOSTUJ
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPage;
