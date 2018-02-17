import React, { Component } from 'react';

class VariableChunk extends Component {
    render() {
        const { id, vanillaText, toolsState, manipulatedTexts, activeTool, chunkClick } = this.props;

        const isActive = manipulatedTexts[activeTool] && !toolsState[id];
        console.log(this.props);
        return (
            <span className={
                (isActive ? 'active-target ' : 'inactive-target ')
                          + (!toolsState[id] ?  'vanilla-target' : 'manipulated-target')}
                  data-id={id}
                  onClick={() => chunkClick(id, isActive)}
            >
                {!toolsState[id] ? vanillaText : manipulatedTexts[toolsState[id]]}
            </span>);
    }
}

export default VariableChunk;
