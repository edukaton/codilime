import React, { Component } from 'react';
import { toPairs } from 'lodash';
import classnames from 'classnames';
import {toolData} from '../toolLibrary';

class Toolbox extends Component {
  render() {
    const { toolbox, onToolClick, activeTool } = this.props;

    return (
        <div>
            Narzędziownik
            {toPairs(toolbox).map(([key, value]) => {
                let visible = false;

                return <Popover
                            visible={visible}
                        >
                    <div
                        key={key}
                        onClick={() => onToolClick(key)}
                        className={classnames(activeTool === key ? 'active-tool' : 'inactive-tool', 'tool')}
                    >
                        {toolData[key].displayName}
                        <span
                            className={'help'}
                        >
                            (❓)
                        </span>
                    </div>;
                </Popover>
            })
            }
        </div>
    );
  }
}

export default Toolbox;
