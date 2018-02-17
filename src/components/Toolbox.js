import React, { Component } from 'react';
import { toPairs } from "lodash";

class Toolbox extends Component {
  render() {
    const { toolbox, onToolClick } = this.props;

    return (
        <div>
            Narzędziownik
            {toPairs(toolbox).map(([key, value]) =>
                <div
                    key={key}
                    onClick={() => onToolClick(key)}
                >
                    {key}
                </div>)
            }
        </div>
    );
  }
}

export default Toolbox;
