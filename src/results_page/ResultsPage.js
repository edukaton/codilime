import React, {Component} from 'react';
import {STATES} from "../consts";
import Logo from "../components/logo";

const RESULTS = {
    good: [
        <p>Twój post został udostępniony przez wiele osób zainteresowanych tematem ochrony przyrody. Wśród nich byli uznani specjaliści, dzięki którym tekst zyskał jeszcze większą popularność. Uczniowie chętnie powołują się na niego przy pisaniu prac na temat ochrony Ziemi.</p>,
        <p>Ty zdobyłeś popularność, a duża stacja telewizyjna przeprowadziła z Tobą wywiad. Jesteś teraz znany i jeszcze bardziej szanowany.</p>,
        <p>Twój post pomaga ludziom w docieraniu do ważnych informacji, a dzięki dużej klikalności dociera do szerokiego grona odbiorców. Umiesz napisać interesujący post bez obniżania prawdziwości informacji. Brawo, tak trzymaj!</p>
    ],
    bad: [
        <p>Twój post rozszedł się szerokim echem w Internecie. Ludźmi wstrząsnęła informacja, że żywność zdrożeje. W
        efekcie masowo ruszyli do sklepów i rozpoczęli gromadzenie zapasów. W ciągu kilku dni ceny chleba wzrosły
        10-krotnie, co wywołało to zamieszki na ulicach.</p>,
        <p>Po odkryciu, że Twój post był nierzetelny, straciłeś zaufanie czytelników i musiałeś zmienić zawód.</p>,
        <p>Twój post wywołał negatywne zdarzenia w prawdziwym świecie, gdyż za wszelką cenę dążyłeś do zwiększenia jego
            sensacyjności. Następnym razem zwracaj baczną uwagę na znaczenie udostępnianych treści.</p>
    ],
};


class ResultsPage extends Component {
    render() {
        const {mainState} = this.props;
        const {appliedTools} = mainState;

        return (
            <div className={'ResultsPage'}>
                <div>
                    {(mainState.metrics.A >= 70 && mainState.metrics.B >= 100) ? RESULTS.good : RESULTS.bad}
                    <button onClick={() => this.props.transferTo(STATES.TASK)}>
                        chce inaczej
                    </button>
                    <button onClick={() => this.props.transferTo(STATES.START)}>
                        ok dzieki
                    </button>
                </div>
            </div>
        );
    }
}

export default ResultsPage;
