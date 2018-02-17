import React, { Component } from 'react';
import DiscoverableChunk from "./DiscoverableChunk";

class DiscoverableText extends Component {
    render() {
        const { onToolDiscover } = this.props;

        return (
            <div>
                <h1>
                    tytul bardzo cichy
                    <DiscoverableChunk
                        toolname={'exclamation'}
                        callback={onToolDiscover}
                        question={{
                            text: 'Czy to prawda?',
                            answers: ['Ni', 'Oj', 'Hyh', 'Uważam że żaby'],
                            correctAnswer: 2,
                        }}
                    >
                        !!!!!!!!!!!!!!!!
                    </DiscoverableChunk>
                </h1>
                Czy wiecie kto powyjadal &nbsp;

                <DiscoverableChunk
                    toolname={'capslock'}
                    callback={onToolDiscover}
                    question={{
                        text: 'Czy to prawda?',
                        answers: ['Ni', 'Oj', 'Hyh', 'Uważam że żaby'],
                        correctAnswer: 0,
                    }}
                >
                    WSZYSTKIE PORZECZKI
                </DiscoverableChunk>
                ?!


            </div>
        );
    }
}

export default DiscoverableText;
