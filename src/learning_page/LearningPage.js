import React, { Component } from 'react';
import {STATES} from "../consts";
import Toolbox from "../components/Toolbox";
import DiscoverableText from "../components/DiscoverableText";

class LearningPage extends Component {
  render() {
    const { mainState, setState } = this.props;

    return (
        <div className={'LearningPage'}>
            Strona Lernejska
            <div className={'main'}>
                <div className={'text'}>
                    <DiscoverableText
                        onToolDiscover={(tool)=> setState((prevState) =>
                            ({
                                    toolbox:
                                        {
                                            [tool]:{},
                                            ...prevState.toolbox
                                        }
                            }))
                        }
                    />
                </div>
                <div className={'side'}>
                    <Toolbox
                        toolbox={mainState.toolbox}
                        onToolClick={(tool) => console.log(tool)}
                    />
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
