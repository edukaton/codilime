import React, { Component } from 'react';
import { toPairs } from 'lodash';
import classnames from 'classnames';
import {toolData} from '../toolLibrary';
import Popover from "react-popover";

class Toolbox extends Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        const { toolbox, onToolClick, activeTool } = this.props;
        const visibilities = this.state;
        const toolboxItems = toPairs(toolbox);

        return (
            <div>
                <div className={'toolbox-head'}>
                    NARZĘDZIA <div className={'toolbox-circle'}>{toolboxItems.length}</div>
                </div>
                {toolboxItems.map(([key, value]) => {
                    return <Popover
                                key={key}
                                isOpen={visibilities[key]}
                                body={toolData[key].helpText}
                                onOuterAction={() => (this.setState({[key]: false}))}
                            >
                                <div
                                    onClick={() => onToolClick(key)}
                                    className={classnames(activeTool === key ? 'active-tool' : 'inactive-tool', 'tool')}
                                >
                                    {toolData[key].displayName}
                                    <span
                                        onClick={() => (this.setState({[key]: true}))}
                                        className={'help'}
                                    >
                                        (❓)
                                    </span>
                                </div>
                        </Popover>
                })
                }
            </div>
    );
  }
}

export default Toolbox;
