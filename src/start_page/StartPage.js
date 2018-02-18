import React, {Component} from 'react';
import {STATES} from './../consts';
import Logo from "../components/logo";

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
                        <div className={'logo-head'}>
                            <Logo/> INFOTOSTER
                        </div>
                        <h3><span className={'title-like'}>{mainState.username}</span>, zostajesz blogerem,
                            który przechwytuje toster do tworzenia
                            gorących newsów.</h3>
                            <span>
                                Zobacz, jak tworzyć treści popularne w Internecie. Pamiętaj jednak: zależy Ci na budowaniu wiarygodnego bloga!
                                Poćwicz na Infotosterze przekształcanie tekstu tak, aby stał się chętniej czytany. Przekonaj się również, jak w ten sposób zmieniony artykuł może wpływać na otoczenie.
                            </span>
                        <div style={{textAlign: 'center', padding: '10px'}}>
                            <button
                                className={'rozgrzej-button'}
                                onClick={() => transferTo(STATES.LEARNING)}
                            >
                                ROZGRZEJ TOSTER
                            </button>
                        </div>
                    </div>
                </div>;
        }
        else if (greeted) {
            mainContent =
                <div>
                    <span className={'title-like'}><Logo/> JAK SIE NAZYWASZ?</span>
                    <div className={'name-form'}>
                        <input type="text" onChange={this.handleChange}/>
                        <button onClick={() => setState({username: value})}>JEDZIEMY</button>
                    </div>
                </div>
        } else {
            mainContent = <div
                                onClick={() => this.setState({greeted: true})}
                                className={'siema'}
            > <div style={{padding:'10px'}}> <Logo/> </div>
                            <div style={{padding: '10px'}}>SIEMA</div> </div>
        }
        return (
            <div className={'StartPage'}>
                {mainContent}
            </div>
        );
    }
}

export default StartPage;
