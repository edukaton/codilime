import React, {Component} from 'react';
import DiscoverableChunk from "./DiscoverableChunk";
import {QUESTIONS} from '../consts';
import operacja from '../operacja.jpg';
import globalWarming from '../globalWarming.jpg'

class DiscoverableText extends Component {
    render() {
        const {onToolDiscover, setState} = this.props;

        return (
            <div>
                <h1>
                    <DiscoverableChunk
                        setState={setState}
                        toolname={'capslock'}
                        callback={onToolDiscover}
                        question={QUESTIONS[1]}
                    >
                        GROZI NAM EPIDEMIA
                    </DiscoverableChunk>
                    ? Czy dzieci trafią do szpitala
                    <DiscoverableChunk
                        setState={setState}
                        toolname={'exclamation'}
                        callback={onToolDiscover}
                        question={QUESTIONS[2]}
                    >
                        ???
                    </DiscoverableChunk>
                </h1>
                <div>
                    <DiscoverableChunk
                        setState={setState}
                        toolname={'sensationalImage'}
                        callback={onToolDiscover}
                        question={QUESTIONS[3]}>
                        <div><img src={operacja}/></div>
                    </DiscoverableChunk>
                    <p>
                        W jednej z gdańskich podstawówek zgłoszono
                        <DiscoverableChunk
                            setState={setState}
                            toolname={'ownInterpretation'}
                            callback={onToolDiscover}
                            question={QUESTIONS[4]}> aż </DiscoverableChunk>
                        4 przypadki zachorowań na
                        <DiscoverableChunk
                            setState={setState}
                            toolname={'addedLinks'}
                            callback={() => {
                                onToolDiscover('addedLinks');
                                onToolDiscover('fakeSource')
                            }}
                            question={QUESTIONS[5]}> <span className="hyperlink">grypę żołądkową</span>.&nbsp;
                        </DiscoverableChunk>
                        Na razie nie ma jeszcze informacji na temat nadchodzącej epidemii, ale zarówno nauczyciele, jak
                        i rodzice obawiają się najgorszego. Grudzień i styczeń to miesiące o największej liczbie
                        zachorowań na zwykłą grypę, a także na jej odmianę, którą jest grypa żołądkowa.
                    </p>
                    <p>
                        Lekarze nie ujawniają, czy konieczna będzie hospitalizacja wszystkich dzieci uczęszczających do
                        zagrożonej podstawówki.&nbsp;
                        <DiscoverableChunk
                            setState={setState}
                            toolname={'emotionalLoad'}
                            callback={onToolDiscover}
                            question={QUESTIONS[6]}>
                            Przestraszeni rodzice czekają w niepewności na rozwój wypadków i dalsze informacje.
                        </DiscoverableChunk>&nbsp;
                        Anna Zelówka, rozgoryczona mama 10-letniej Kasi, która padła ofiarą grypy, pyta: “Jak to się
                        stało,
                        że moja córka zaraziła się tymi bakteriami? Gdzie byli nauczyciele?!”
                    </p>
                    <p>
                        Szkoła w poprzednim miesiącu przeszła deratyzację. Obecnie eksperci sprawdzają, jaki to mogło
                        mieć
                        wpływ na zachorowania dzieci.
                    </p>
                </div>
                <h1>
                    <DiscoverableChunk
                        setState={setState}
                        toolname={'sensationalText'}
                        callback={onToolDiscover}
                        question={QUESTIONS[7]}>
                        NAJNOWSZE DONIESIENIA!!! </DiscoverableChunk>
                    Globalne ocieplenie podważone???</h1>
                <DiscoverableChunk
                    setState={setState}
                    toolname={'sensationalImage'}
                    callback={onToolDiscover}
                    question={QUESTIONS[8]}>
                    <div><img src={globalWarming}/></div>
                </DiscoverableChunk>
                <div>
                    <p>
                        Na ostatniej konferencji poświęconej naszemu klimatowi głównym tematem rozmów stał się wpływ
                        człowieka na wzrost globalnej temperatury. Część naukowców uważa, że winni są nie tylko ludzie,
                        ale i krowy. Rosnące spożycie mięsa powoduje powiększanie hodowli bydła. Jest ono największym na
                        świecie źródłem metanu - najgroźniejszego gazu cieplarnianego.
                    </p>
                    <p>
                        <DiscoverableChunk
                            setState={setState}
                            toolname={'opinionVsFact'}
                            callback={onToolDiscover}
                            question={QUESTIONS[9]}>
                            Dr John Irons uważa, że </DiscoverableChunk>
                        nie ma stuprocentowej pewności, że globalne ocieplenie w ogóle ma miejsce. Badacz rozważa nawet
                        ryzyko nadejścia kolejnej epoki lodowcowej. Jak twierdzi “Ludzkość musi być przygotowana na
                        wszystko. Mamy obecnie ciepłe zimy, ale broń Boże nie wyrzucajmy jeszcze grubych kurtek!”
                    </p>
                    <p>
                        <DiscoverableChunk
                            setState={setState}
                            toolname={'honest'}
                            callback={() => {
                                onToolDiscover('honest');
                                onToolDiscover('misleading')
                            }}
                            question={QUESTIONS[10]}>
                            Ostatnia fala ochłodzenia w południowej Anglii nie wydaje się tego
                            potwierdzać. </DiscoverableChunk>
                        Jest to też region znany z dużych hodowli krów. Prawdopodobne więc, że bydło jednak nie ponosi
                        winy za globalne ocieplenie.

                    </p>
                </div>
                {/*<DiscoverableChunk
                    setState={setState}
                    toolname={'share'}
                    callback={onToolDiscover}
                    question={QUESTIONS[11]}>
                    <div>Share</div>
                </DiscoverableChunk>*/}
            </div>
        )
            ;
    }
}

export default DiscoverableText;
