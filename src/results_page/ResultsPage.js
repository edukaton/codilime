import React, { Component } from 'react';
import {STATES} from "../consts";
import Logo from "../components/logo";

class ResultsPage extends Component {
  render() {
      const { mainState } = this.props;
      const { appliedTools } = mainState;

      return (
        <div className={'ResultsPage'}>
            <div>
                {!appliedTools.capslock ? 'Bez kapslocka to smutno' : 'Kapslock wiec spoko'}
                <button onClick={() => this.props.transferTo(STATES.TASK)}>
                    chce inaczej
                </button>
                <button onClick={() => this.props.transferTo(STATES.START)}>
                    ok dzieki
                </button>
            </div>
        </div>
    );
  }
}

export default ResultsPage;
