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
                    <div style={{padding: '150px'}}>
                        <h3><span className={'title-like'}>{mainState.username}</span>, liczmy na Ciebie!</h3>
                        <span>
                        Phasellus a est nulla. Quisque in maximus sem. Quisque lobortis imperdiet libero non dapibus. Donec interdum sapien mi, nec blandit est posuere vel. Duis elementum lacinia nunc, vel ultricies purus.
                        </span>

                        <button onClick={() => transferTo(STATES.LEARNING)}>
                            ROZGRZEJ TOSTER
                        </button>
                    </div>
                </div>;
        }
        else if (greeted) {
            mainContent =
                <div>
                    <span className={'title-like'}>🍞 JAK SIE NAZYWASZ?</span>
                    <div className={'name-form'}>
                        <input type="text" onChange={this.handleChange}/>
                        <button onClick={() => setState({username: value})}>JEDZIEMY</button>
                    </div>
                </div>
        } else {
            mainContent = <div
                                onClick={() => this.setState({greeted: true})}
                                className={'siema'}
                            > SIEMA </div>
        }
        return (
            <div className={'StartPage'}>
                {mainContent}
            </div>
        );
    }
}

export default StartPage;
