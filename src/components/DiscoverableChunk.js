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
        return <Popover
            isOpen={popoverVisible}
            preferPlace={'below'}
            onOuterAction={() => this.setState({popoverVisible: false})}
            body={<div>
                {question.text}
                <div onClick={() => callback(toolname)}> {question.answerA} </div>
                <div onClick={() => callback(toolname)}> {question.answerB} </div>
                <div onClick={() => callback(toolname)}> {question.answerC} </div>
                <div onClick={() => callback(toolname)}> {question.answerD} </div>
            </div>}
        >
                    <span onClick={() => this.setState({popoverVisible: true})}>
                        {children}
                    </span>
        </Popover>;
    }
}

export default DiscoverableChunk;
