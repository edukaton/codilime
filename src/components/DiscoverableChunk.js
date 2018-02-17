import React, { Component } from 'react';
import Popover from 'react-popover';

class DiscoverableChunk extends Component {
    constructor(props) {
        super(props);

        this.state = {popoverVisible:false};
    }

    render() {
        const { children, callback, toolname, question } = this.props;
        const { popoverVisible } = this.state;

        const answer = (correct) => {
            this.setState({popoverVisible:false});
            return callback(toolname);
        };

        return <Popover
                    isOpen={popoverVisible}
                    preferPlace={'below'}
                    onOuterAction={() => this.setState({popoverVisible: false})}
                    body={<div>
                        {question.text}
                        {question.answers.map((answerText, index) =>
                            <div key={index} onClick={() => answer(index === question.correctAnswer)}>
                                🔁 {answerText}
                            </div>)}
                    </div>}
                >
                    <span onClick={() => this.setState({popoverVisible: true})}>
                        {children}
                    </span>
        </Popover>;
    }
}

export default DiscoverableChunk;
