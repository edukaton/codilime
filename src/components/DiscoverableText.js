import React, {Component} from 'react';
import DiscoverableChunk from "./DiscoverableChunk";
import {QUESTIONS} from '../consts';
import operacja from '../operacja.jpg';
import globalWarming from '../globalWarming.jpg'

class DiscoverableText extends Component {
    render() {
        const {onToolDiscover} = this.props;

        return (
            <div>
                <h1>
                    <DiscoverableChunk
                        toolname={'capslock'}
                        callback={onToolDiscover}
                        question={QUESTIONS[1]}
                    >
                        GROZI NAM EPIDEMIA
                    </DiscoverableChunk>
                    ? Czy dzieci trafią do szpitala
                    <DiscoverableChunk
                        toolname={'exclamation'}
                        callback={onToolDiscover}
                        question={QUESTIONS[2]}
                    >
                        ???
                    </DiscoverableChunk>
                </h1>
                <DiscoverableChunk
                    toolname={'rescaledImage'}
                    callback={onToolDiscover}
                    question={QUESTIONS[3]}>
                    <div><img src={operacja}/></div>
                </DiscoverableChunk>
                <div>
                    W jednej z gdańskich podstawówek zgłoszono
                    <DiscoverableChunk
                        toolname={'ownInterpretation'}
                        callback={onToolDiscover}
                        question={QUESTIONS[4]}> aż </DiscoverableChunk>
                    4 przypadki zachorowań na
                    <DiscoverableChunk
                        toolname={'addedLinks'}
                        callback={onToolDiscover}
                        question={QUESTIONS[5]}> <u>grypę żołądkową</u>. </DiscoverableChunk>
                    Na razie nie ma jeszcze informacji na temat nadchodzącej epidemii i czy konieczna
                    będzie hospitalizacja wszystkich dzieci, ale&nbsp;
                    <DiscoverableChunk
                        toolname={'emotionalLoad'}
                        callback={onToolDiscover}
                        question={QUESTIONS[6]}>
                        przestraszeni rodzice czekają w niepewności na rozwój wypadków i dalsze informacje.
                    </DiscoverableChunk>
                </div>

                <h1>
                    <DiscoverableChunk
                        toolname={'sensationalText'}
                        callback={onToolDiscover}
                        question={QUESTIONS[7]}>
                        NAJNOWSZE DONIESIENIA!!! </DiscoverableChunk>
                    Globalne ocieplenie podważone???</h1>
                <DiscoverableChunk
                    toolname={'modifiedImage'}
                    callback={onToolDiscover}
                    question={QUESTIONS[8]}>
                    <div><img src={globalWarming}/></div>
                </DiscoverableChunk>
                <div>
                    <DiscoverableChunk
                        toolname={'opinionVsFact'}
                        callback={onToolDiscover}
                        question={QUESTIONS[9]}>
                        Dr John Irons uważa, że </DiscoverableChunk>
                    nie ma stuprocentowej pewności, że globalne ocieplenie ma miejsce.&nbsp;
                    <DiscoverableChunk
                        toolname={'capslock'}
                        callback={onToolDiscover}
                        question={QUESTIONS[10]}>
                        Ostatnia fala ochłodzenia w południowej Anglii nie wydaje się tego
                        potwierdzać.</DiscoverableChunk>
                </div>
                <DiscoverableChunk
                    toolname={'capslock'}
                    callback={onToolDiscover}
                    question={QUESTIONS[11]}>
                    <div>
                        Zszeruj na F
                    </div>
                </DiscoverableChunk>
            </div>
        )
            ;
    }
}

export default DiscoverableText;
