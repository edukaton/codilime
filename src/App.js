import React, {Component} from 'react';
import Modal from 'react-modal';
import './App.css';
import './Layout.css';
import StartPage from "./start_page/StartPage";
import LearningPage from "./learning_page/LearningPage";
import TaskPage from "./task_page/TaskPage";
import ResultsPage from "./results_page/ResultsPage";
import {STATES} from './consts';

const INITIAL_STATE = {
    currentPage: STATES.TASK,//STATES.START,
    toolbox: {},
    appliedTools: {},
    modalsHidden: {},
    metrics: {
        A: 20,
        B: 20,
        C: 20,
        D: 50,
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
    }

    render() {
        let MainComponent;

        switch (this.state.currentPage) {
            case STATES.START:
                MainComponent = StartPage;
                break;

            case STATES.LEARNING:
                MainComponent = LearningPage;
                break;

            case STATES.TASK:
                MainComponent = TaskPage;
                break;

            case STATES.RESULTS:
                MainComponent = ResultsPage;
                break;

            default:
                MainComponent = StartPage;
        }

        return (
            <div className="App">
                <MainComponent
                    transferTo={this.transferTo}
                    setState={(updater) => this.setState(updater)}
                    mainState={this.state}
                />
            </div>
        );
    }

    transferTo = (pageName) => {
        this.setState({currentPage: pageName});
    }
}

export default App;
