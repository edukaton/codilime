import React, {Component} from 'react';
import VariableChunk from './VariableChunk';
import environment from '../environment.jpg';
import skeleton from '../skeleton.jpg'

const LOREM = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker";

class VariableText extends Component {
    render() {
        const {toolsState, activeTool, chunkClick} = this.props;
        const chunkDefaults = {
            chunkClick,
            activeTool,
            toolsState,
        };

        return (
            <div>
                <VariableChunk
                    id={'1'}
                    vanillaText={<img src={environment}/>}
                    manipulatedTexts={{
                        sensationalImage: <img src={skeleton}/>
                    }}
                    {...chunkDefaults}
                />

                <h1>
                    <VariableChunk
                        id={'2'}
                        vanillaText={'Ludzie '}
                        manipulatedTexts={{
                            sensationalText: 'Nobliści alarmują - ludzie '
                        }}
                        {...chunkDefaults}
                    />
                    nadal
                    <VariableChunk
                        id={'3'}
                        vanillaText={' niszczą '}
                        manipulatedTexts={{
                            capslock: ' NISZCZĄ '
                        }}
                        {...chunkDefaults}
                    />
                    <VariableChunk
                        id={'4'}
                        vanillaText={'środowisko'}
                        manipulatedTexts={{
                            exclamation: 'środowisko!!!'
                        }}
                        {...chunkDefaults}
                    />

                </h1>

                <div>
                    Autor: …<br/>
                    Data: …
                </div>

                <div>
                    <strong>
                        W 1992 roku naukowcy ostrzegli ludzi przed <VariableChunk
                        id={'5'}
                        vanillaText={'niszczeniem'}
                        manipulatedTexts={{
                            emotionalLoad: 'tak drastycznym niszczeniem'

                        }}
                        {...chunkDefaults}
                    /> środowiska i ocieplaniem się klimatu. Teraz okazuje się, że sytuacja wcale się nie poprawiła.
                    </strong>
                </div>
                <div>
                    <p>
                        <VariableChunk
                            id={'6'}
                            vanillaText={'Pierwszy raport o stanie'}
                            manipulatedTexts={{
                                addedLinks: <span className="hyperlink">Pierwszy
                                    raport o stanie</span>
                            }}
                            {...chunkDefaults}/>
                        &nbsp;środowiska wraz z listą proponowanych zmian został podpisany przez
                        <VariableChunk
                            id={'7'}
                            vanillaText={' około '}
                            manipulatedTexts={{
                                ownInterpretation: ' aż '
                            }}
                            {...chunkDefaults}
                        />
                        1700 naukowców. Wśród nich było wielu noblistów. Napisano w nim, że przyroda jest zagrożona
                        przez to, jak żyjemy. Raport wskazał też, nad którymi rzeczami powinniśmy jak najszybciej zacząć
                        pracować.
                    </p>
                    <p>
                        <VariableChunk
                            id={'8'}
                            vanillaText={'Drugi raport'}
                            manipulatedTexts={{
                                fakeSource: <span className="hyperlink">Drugi raport</span>
                            }}
                            {...chunkDefaults}
                        />
                        &nbsp;podpisało
                        <VariableChunk
                            id={'9'}
                            vanillaText={' 15 364 '}
                            manipulatedTexts={{
                                misleading: ' prawie 16 000 '
                            }}
                            {...chunkDefaults}
                        />
                        naukowców z całego świata.
                        Dowodzi on, iż ludzie nie wyciągnęli nauki z pierwszego ostrzeżenia.
                        W ciągu ostatnich 25 lat niewiele rzeczy zostało zrobionych, aby chronić Ziemię i jej klimat.
                        Twórcy wskazali trzynaście punktów do poprawy.
                        Były to m.in. zmniejszenie wielkości populacji ludzi oraz zmniejszenie spalania węgla
                        kamiennego.
                    </p>
                    <p>
                        <VariableChunk
                            id={'10'}
                            vanillaText={'Sądzę'}
                            manipulatedTexts={{
                                opinionVsFact: 'Faktem jest'
                            }}
                            {...chunkDefaults}/>
                        , że powinniśmy zmienić nasz styl życia.
                        <VariableChunk
                            id={'11'}
                            vanillaText={' Amerykańscy naukowcy dowodzą'}
                            manipulatedTexts={{
                                addedLinks: <span className="hyperlink"> Amerykańscy naukowcy dowodzą</span>
                            }}
                            {...chunkDefaults}
                        />
                        , że to
                        <VariableChunk
                            id={'12'}
                            vanillaText={' człowiek jest powodem '}
                            manipulatedTexts={{
                                honest: ' człowiek jest jednym z powodów '
                            }}
                            {...chunkDefaults}
                        />
                        ocieplania się klimatu
                        <VariableChunk
                        id={'13'}
                        vanillaText={' i wyjałowienia gleby. '}
                        manipulatedTexts={{
                            honest: '. '
                        }}
                        {...chunkDefaults}
                        />
                        Będzie miało to
                        <VariableChunk
                        id={'14'}
                        vanillaText={' wpływ '}
                        manipulatedTexts={{
                            emotionalLoad: ' dramatyczny wpływ '
                        }}
                        {...chunkDefaults}/>
                        na ceny żywności, zwłaszcza produktów zbożowych. Ziemię mamy jedną, więc należy ją chronić.
                        Wiele możemy zmienić sami! Oszczędzajmy wodę, prąd i produkujmy mniej śmieci.
                    </p>
                </div>

            </div>
        );
    }
}

export default VariableText;
