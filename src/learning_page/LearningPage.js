import React, {Component} from 'react';
import {STATES} from "../consts";
import Toolbox from "../components/Toolbox";
import DiscoverableText from "../components/DiscoverableText";

class LearningPage extends Component {
    render() {
        const {mainState, setState} = this.props;

        return (
            <div className={'LearningPage'}>
                <div className={'main'}>
                    <div className={'text'}>
                        <DiscoverableText
                            onToolDiscover={this.onToolDiscover}
                        />
                    </div>
                    <div className={'side'}>
                        <Toolbox
                            toolbox={mainState.toolbox}
                            activeTool={mainState.activeTool}
                            onToolClick={(tool) => console.log(tool)}
                        />
                    </div>
                </div>
                <div className={'bottom'}>
                    <button onClick={() => this.props.transferTo(STATES.TASK)}>
                        juz umiem
                    </button>
                </div>
            </div>
        );
    }

    onToolDiscover = (tool) => this.props.setState((prevState) =>
                            ({
                                toolbox:
                                    {
                                        [tool]: {},
                                        ...prevState.toolbox
                                    }
                            }));
}

export default LearningPage;
