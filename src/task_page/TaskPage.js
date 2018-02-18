import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Modal from 'react-modal';

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
                    <div onClick={() => this.props.transferTo(STATES.LEARNING)}>
                        <span>{'(<)'}</span>Do rozgrzewki
                    </div>
                    <div className={'title'}>
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
                        <div>
                            Klikalność: {mainState.metrics.A} <Slider value={mainState.metrics.A} disabled={true}/>
                        </div>
                        <div>
                            Prawdziwość: {mainState.metrics.B} <Slider value={mainState.metrics.B} disabled={true}/>
                        </div>
                        <div>
                            Manipulacja: {mainState.metrics.C} <Slider value={mainState.metrics.C} disabled={true}/>
                        </div>
                        <div>
                            Zaufanie: {mainState.metrics.D} <Slider value={mainState.metrics.D} disabled={true}/>
                        </div>
                    </div>
                    <div className={'buttons'}>
                        <button onClick={() => this.props.transferTo(STATES.RESULTS)}>
                            TOSTUJ
                        </button>
                    </div>
                </div>

                <Modal
                    isOpen={!mainState.modalsHidden[STATES.TASK]}
                    style={modalStyle}
                >
                    <h1 id="heading">{mainState.username}, wchodzisz do trybu tostowania</h1>
                    <div id="full_description">
                        <p>Description goes here.</p>
                        <button onClick={() => this.props.setState((prevState) => ({modalsHidden:{[STATES.TASK]:true, ...prevState.modalHidden}}))}>Jasne</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default TaskPage;
