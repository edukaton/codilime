import React, { Component } from 'react';

class DiscoverableText extends Component {
    render() {
        const { onToolDiscover } = this.props;

        return (
            <div>
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
