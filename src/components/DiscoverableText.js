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
                            answerA: 'Ni',
                            answerB: 'Oj',
                            answerC: 'Hyh',
                            answerD: 'Uważam że żaby',
                        }}
                    >
                        !!!!!!!!!!!!!!!!
                    </DiscoverableChunk>
                </h1>
                Czy wiecie kto powyjadal

                <DiscoverableChunk
                    toolname={'capslock'}
                    callback={onToolDiscover}
                    question={{
                        text: 'Czy to prawda?',
                        answerA: 'Ni',
                        answerB: 'Oj',
                        answerC: 'Hyh',
                        answerD: 'Uważam że żaby',
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
