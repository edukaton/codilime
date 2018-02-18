import React, {Component} from 'react';
import {modalStyle, STATES} from "../consts";
import { toPairs } from 'lodash';
import Popover from 'react-popover';
import Logo from "../components/logo";
import Toolbox from "../components/Toolbox";
import DiscoverableText from "../components/DiscoverableText";

const showModal = (setState, body) => {
    setState({modalBody: body, modalHidden:false});
}

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
                    <div className={'navText'} onClick={() => this.props.transferTo(STATES.START)}>
                        <div className={'circle'}>{'<'}</div>NA POCZĄTEK</div>
                    <div className={'title'}>
                        <div style={{padding: '10px'}}>
                            <Popover
                                isOpen={!mainState.modalHidden}
                                preferPlace={'below'}
                                onOuterAction={() => this.props.setState({modalHidden:true})}
                                body={mainState.modalBody}>
                                    <Logo/>
                            </Popover>
                        </div>
                        INFOTOSTER.rozgrzewka
                    </div>
                </div>
                <div className={'main'}>
                    <div className={'text'}>
                        <DiscoverableText
                            onToolDiscover={this.onToolDiscover}
                            setState={setState}
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
                        {toPairs(mainState.toolbox).length >= 3 && <button onClick={() => this.props.transferTo(STATES.TASK)}>
                            TOSTUJ >
                        </button>}
                    </div>
                </div>
            </div>
        );
    }

    onToolDiscover = (tool) => {
        if(toPairs(this.props.mainState.toolbox).length === 2) {
            this.props.setState({modalBody: <div>Masz wystarczająco dużo narzędzi, by przejść do trybu tostowania</div>, modalHidden: false})
        }

        return this.props.setState((prevState) =>
            ({
                toolbox:
                    {
                        [tool]: {},
                        ...prevState.toolbox
                    }
            }));
    };
}

export default LearningPage;
