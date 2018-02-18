import React, { Component } from 'react';
import Popover from 'react-popover';

class DiscoverableChunk extends Component {
    constructor(props) {
        super(props);

        this.state = {popoverVisible:false};
    }

    render() {
        const { children, callback, toolname, question, setState } = this.props;
        const { popoverVisible } = this.state;

        const answer = (correct) => {
            this.props.setState({modalHidden:true});
            return callback(toolname);
        };

        const questionBody = <div>
            {question.text}
            {question.answers.map((answerText, index) =>
                <div key={index} onClick={() => answer(index === question.correctAnswer)}>
                    🔁 {answerText}
                </div>)}
        </div>

        return <span onClick={() => setState({modalBody: questionBody, modalHidden:false})}>
                        {children}
                    </span>;
    }
}

export default DiscoverableChunk;
