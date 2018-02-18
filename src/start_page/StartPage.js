import React, {Component} from 'react';
import {STATES} from './../consts';

class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        const {mainState, transferTo, setState} = this.props;
        const {value, greeted} = this.state;

        let mainContent = <div/>;

        if (mainState.username) {
            mainContent =
                <div>
                    Witaj {mainState.username}
                    <button onClick={() => transferTo(STATES.LEARNING)}>
                        dalej
                    </button>
                </div>;
        }
        else if (greeted) {
            mainContent =
                <div>
                    Podej no imie
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={() => setState({username: value})}>Dalej</button>
                </div>
        } else {
            mainContent = <div onClick={() => this.setState({greeted: true})}> siema </div>
        }
        return (
            <div className={'StartPage'}>
                {mainContent}
            </div>
        );
    }
}

export default StartPage;
