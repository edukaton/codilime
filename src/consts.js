export const STATES = {
    START: 'start',
    LEARNING: 'learning',
    TASK: 'task',
    RESULTS: 'results',
};

export const QUESTIONS = {
    1: {
        text: 'Oto część tytułu zapisana capslockiem. Jak sądzisz, jak wpływa to na odbiór tekstu?',
        answers: [
            'zwiększa odbiór',
            'zmniejsza odbiór',
            'odbiór bez zmian'
        ],
        correctAnswer: 0,
    },
    2: {
        text: 'Dodanie dodatkowych znaków zapytania i wykrzykników. Jak wpływa to na Twój odbiór tekstu?',
        answers: [
            'nie ma wpływu',
            'jest bardziej sensacyjne',
            'raczej już tego nie przeczytam...'
        ],
        correctAnswer: 1,
    },
    3: {
        text: 'Czy to zdjęcie pochodzi z Gdańska? ' +
        'Czy jest związane z daną historią? ' +
        'Jakie wzbudza emocje i z czym Ci się kojarzy? ' +
        'Zastanów się, jak odpowiada opisanej historii? ' +
        'Czy zawsze możemy zaufać zdjęciu?',
        answers: [
            'tak, zawsze odpowiada ono historii przedstawionej w tekście',
            'nie, zdjęcie może być zmodyfikowane, odpowiednio dobrane (np. pod kątem emocji), albo podmienione.'
        ],
        correctAnswer: 1,
    },
    4: {
        text: 'Dodanie znaczenia: nie wiemy czy 4 to dużo, i w jakim czasie. ' +
        '"aż" sugeruje, że to dużo. ' +
        'Czy dany tekst informuje o tym, czy 4 to dużo czy nie?',
        answers: [
            'a) tak',
            'b) nie',
            'c) nie mam pojęcia'
        ],
        correctAnswer: 0,
    },
    5: {
        text: 'Link do źródeł lub dalszych informacji. ' +
        'Taki link może uwiarygodnić materiał, ale musisz upewnić się, że źródło jest faktycznie wiarygodne. ' +
        'Link może prowadzić do strony, która nie jest rzetelna.',
        answers: [],
        correctAnswer: 0,
    },
    6: {
        text: 'Nacechowanie emocjonalne: nie ma jeszcze informacji o zagrożeniu epidemii, ' +
        'ale informacja o rodzicach sugeruje zagrożenie i niepewność. ' +
        'Które sformułowanie jest wg Ciebie najbardziej emocjonalne?',
        answers: [
            'a) rodzice czekają',
            'b) przestraszeni rodzice',
            'c) czekają na rozwój wypadków'
        ],
        correctAnswer: 1,
    },
    7: {
        text: 'Hasło "Najnowsze doniesienia!!!" jest bardzo sensacyjne i zwraca uwagę czytelnika. ' +
        'Użycie takich haseł jest częstym zabiegiem mającym na celu zwrócenie uwagi. ' +
        'Które wyrażenie jest wg Ciebie najbardziej sensacyjne?',
        answers: [
            'a) Nie do wiary.',
            'b) Czy możemy w to wierzyć?',
            'c) Nie do wiary!!! Zobaczcie co się stało!'
        ],
        correctAnswer: 2,
    },
    8: {
        text: 'Dobór zdjęcia i modyfikacja zdjęcia. ' +
        'Czy zdjęcie rzetelnie przedstawia historię czy tylko sugeruje coś, co niekoniecznie ma miejsce? ' +
        'Wybierz prawdziwe stwierdzenie:',
        answers: [
            'a) to zdjęcie jest wykonane w południowej Anglii',
            'b) to zdjęcie przedstawia zimowy pejzaż',
            'c) to zdjęcie dowodzi, że ocieplenia nie ma - jest za to mroźna zima!'
        ],
        correctAnswer: 1,
    },
    9: {
        text: 'Opinia a fakt. Zauważ, że mamy tu do czynienia z opinią, a nie faktem, ' +
        'i nie wiemy jaką wiedzę ma dr Irons. Tytuł sugeruje jednak coś, co jest pewne i jest doniesieniem. ' +
        'Często możemy mieć do czynienia z przyjmowaniem opinii jako faktów.',
        answers: [],
        correctAnswer: 0,
    },
    10: {
        text: 'Wybiórczość w doborze faktów. ' +
        'Czy to, co się dzieje w Anglii, automatycznie dowodzi czegoś, ' +
        'co ma charakter ogólnoświatowy?',
        answers: [],
        correctAnswer: 0,
    },
    11: {
        text: 'Smash that mf LIKE button!',
        answers: [],
        correctAnswer: 0,
    },
};