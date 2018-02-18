import React, {Component} from 'react';
import Modal from 'react-modal';
import './App.css';
import './Layout.css';
import StartPage from "./start_page/StartPage";
import LearningPage from "./learning_page/LearningPage";
import TaskPage from "./task_page/TaskPage";
import ResultsPage from "./results_page/ResultsPage";
import {STATES} from './consts';
import 'typeface-source-sans-pro';

const INITIAL_STATE = {
    currentPage: STATES.TASK,//STATES.LEARNING,
    modalBody: <div/>,
    toolbox: {},
    appliedTools: {},
    modalsHidden: {},
    modalHidden: true,
    metrics: {
        A: 40,
        B: 70,
        C: 40,
        D: 70,
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

        if(intros[pageName]){
            this.setState({modalBody: intros[pageName], modalHidden:false});
        }
    }
}

const intros = {
    [STATES.LEARNING]: <div>Czy coś nie pasuje Ci w tekście po lewej? Spróbuj kliknąć na fragmenty tekstu, co do których masz wątpliwości.</div>,
    [STATES.TASK]: <div>Czas na Twojego tosta! Klikaj w narzędzia po prawej, by wyszedł pyszny i chrupiący.</div>,
}

export default App;
