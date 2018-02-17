import React, { Component } from 'react';
import { toPairs } from "lodash";

class Toolbox extends Component {
  render() {
    const { toolbox, onToolClick, activeTool } = this.props;

    return (
        <div>
            Narzędziownik
            {toPairs(toolbox).map(([key, value]) =>
                <div
                    key={key}
                    onClick={() => onToolClick(key)}
                    className={activeTool === key ? 'active-tool' : 'inactive-tool'}
                >
                    {key}
                </div>)
            }
        </div>
    );
  }
}

export default Toolbox;
