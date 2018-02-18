import React, {Component} from 'react';
import {modalStyle, STATES} from "../consts";
import Modal from 'react-modal';
import Toolbox from "../components/Toolbox";
import DiscoverableText from "../components/DiscoverableText";

class LearningPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const {mainState, setState} = this.props;

        return (
            <div className={'LearningPage'}>
                <div className={'head'}>
                    <div onClick={() => this.props.transferTo(STATES.START)}><span>{'(<)'}</span>Na poczatek</div>
                    <div className={'title'}>
                        🍞 INFOTOSTER.rozgrzewka
                    </div>
                </div>
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
                    <div className={'sliders'}/>
                    <div className={'buttons'}>
                        <button onClick={() => this.props.transferTo(STATES.TASK)}>
                            juz umiem
                        </button>
                    </div>
                </div>
                <Modal
                    isOpen={!mainState.modalsHidden[STATES.LEARNING]}
                    style={modalStyle}
                >
                    <h1 id="heading">{mainState.username}, własnie wchodzisz do trybu rozgrzewki</h1>
                    <div id="full_description">
                        <p>Description goes here.</p>
                        <button onClick={() => this.props.setState((prevState) => ({modalsHidden:{[STATES.LEARNING]:true, ...prevState.modalsHidden}}))}>Jasne</button>
                    </div>
                </Modal>
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
