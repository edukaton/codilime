import React, { Component } from 'react';
import VariableChunk from './VariableChunk';

const LOREM = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker";
class VariableText extends Component {
    render() {
        const { toolsState, activeTool, chunkClick } = this.props;
        const chunkDefaults = {
            chunkClick,
            activeTool,
            toolsState,
        }

        return (
            <div>
                <h2>
                    <VariableChunk
                        id={'1'}
                        vanillaText={'fajny tytulik'}
                        manipulatedTexts={{
                            capslock: 'fajny tytulik'.toUpperCase(),
                            exclamation: 'fajny tytulik!!!!!!!!!!!!!',
                        }}
                        {...chunkDefaults}
                    />
                </h2>

                {LOREM}
                <VariableChunk
                    id={'2'}
                    vanillaText={LOREM}
                    manipulatedTexts={{
                        capslock: LOREM.toUpperCase()
                    }}
                    {...chunkDefaults}
                />
                {LOREM}
                <VariableChunk
                    id={'3'}
                    vanillaText={LOREM}
                    manipulatedTexts={{
                        exclamation: '!!!!!'
                    }}
                    {...chunkDefaults}
                />

            </div>
        );
    }
}

export default VariableText;
