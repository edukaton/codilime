import React, { Component } from 'react';
import Popover from 'react-popover';
import {toolData} from "../toolLibrary";

class VariableChunk extends Component {
    constructor(props) {
        super(props);

        this.state = {popoverVisible:false};
    }

    onClickHandler;

    render() {
        const { id, vanillaText, toolsState, manipulatedTexts, activeTool, chunkClick } = this.props;
        const { popoverVisible } = this.state;
        const isActive = manipulatedTexts[activeTool] && !toolsState[id];
        const isManipulated = !!toolsState[id];

        const onUndoClickHandler = () => {
            this.setState({popoverVisible: false});
            return chunkClick(id, true);
        };

        const popoverBody = <div>
                                {toolsState[id] && toolData[toolsState[id]].displayName}
                                <button onClick={onUndoClickHandler}>Cofnij</button>
                            </div>;

        this.onClickHandler = () => {
            if (isActive) {
                return chunkClick(id, isActive);
            }
            else if(isManipulated) {
                this.setState({popoverVisible: true})
            }
        };

        return (
            <Popover
                isOpen={popoverVisible}
                body={popoverBody}
                onOuterAction={() => this.setState({popoverVisible: false})}
            >
                <span className={
                    (isActive ? 'active-target ' : 'inactive-target ')
                              + (!toolsState[id] ?  'vanilla-target' : 'manipulated-target')}
                      data-id={id}
                      onClick={this.onClickHandler}
                >
                    {!toolsState[id] ? vanillaText : manipulatedTexts[toolsState[id]]}
                </span>
            </Popover>);

    }
}

export default VariableChunk;
