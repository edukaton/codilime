import React, { Component } from 'react';

const LOREM = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker";
class VariableText extends Component {
    render() {
        const { toolsState } = this.props;

        return (
            toolsState.capslock ?
                <div>
                    {LOREM.toUpperCase()}
                </div>
                :
            <div>
                {LOREM}
            </div>
        );
    }
}

export default VariableText;
