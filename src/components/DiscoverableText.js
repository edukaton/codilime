import React, { Component } from 'react';

class DiscoverableText extends Component {
    render() {
        const { onToolDiscover } = this.props;

        return (
            <div>
                <h1>
                    tytul bardzo cichy
                    <span onClick={()=>onToolDiscover('exclamation')}>
                        !!!!!!!!!!!!!!!!
                    </span>
                </h1>
                Czy wiecie kto powyjadal
                <span onClick={()=>onToolDiscover('capslock')}>
                    WSZYSTKIE PORZECZKI
                </span>
                ?!


            </div>
        );
    }
}

export default DiscoverableText;
