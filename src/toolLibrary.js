export const metricApply = {
    sensationalImage: ({A, B, C, D}) =>     ({A: A + 10, B: B - 10, C: C + 10, D: D - 10}),
    sensationalText: ({A, B, C, D}) =>      ({A: A + 10, B: B - 10, C: C + 10, D: D - 10}),
    capslock: ({A, B, C, D}) =>             ({A: A + 10, B: B +  0, C: C +  0, D: D +  0}),
    exclamation: ({A, B, C, D}) =>          ({A: A + 10, B: B +  0, C: C +  0, D: D +  0}),
    emotionalLoad: ({A, B, C, D}) =>        ({A: A + 10, B: B +  0, C: C + 10, D: D - 10}),
    addedLinks: ({A, B, C, D}) =>           ({A: A -  0, B: B + 10, C: C +  0, D: D + 10}),
    ownInterpretation: ({A, B, C, D}) =>    ({A: A -  0, B: B -  0, C: C + 10, D: D - 10}),
    fakeSource: ({A, B, C, D}) =>           ({A: A -  0, B: B - 10, C: C +  0, D: D - 10}),
    misleading: ({A, B, C, D}) =>           ({A: A -  0, B: B - 10, C: C + 10, D: D - 10}),
    opinionVsFact: ({A, B, C, D}) =>        ({A: A -  0, B: B - 10, C: C + 10, D: D - 10}),
    share: ({A, B, C, D}) =>                ({A: A + 10, B: B +  0, C: C +  0, D: D +  0}),
    honest: ({A, B, C, D}) =>               ({A: A -  0, B: B +  5, C: C - 15, D: D + 10}),
};

export const metricUnApply = {
    sensationalImage: ({A, B, C, D}) =>     ({A: A - 10, B: B + 10, C: C - 10, D: D + 10}),
    sensationalText: ({A, B, C, D}) =>      ({A: A - 10, B: B + 10, C: C - 10, D: D + 10}),
    capslock: ({A, B, C, D}) =>             ({A: A - 10, B: B +  0, C: C +  0, D: D +  0}),
    exclamation: ({A, B, C, D}) =>          ({A: A - 10, B: B +  0, C: C +  0, D: D +  0}),
    emotionalLoad: ({A, B, C, D}) =>        ({A: A - 10, B: B +  0, C: C - 10, D: D + 10}),
    addedLinks: ({A, B, C, D}) =>           ({A: A +  0, B: B - 10, C: C +  0, D: D - 10}),
    ownInterpretation: ({A, B, C, D}) =>    ({A: A +  0, B: B +  0, C: C - 10, D: D + 10}),
    fakeSource: ({A, B, C, D}) =>           ({A: A +  0, B: B + 10, C: C +  0, D: D + 10}),
    misleading: ({A, B, C, D}) =>           ({A: A +  0, B: B + 10, C: C - 10, D: D + 10}),
    opinionVsFact: ({A, B, C, D}) =>        ({A: A +  0, B: B + 10, C: C - 10, D: D + 10}),
    share: ({A, B, C, D}) =>                ({A: A - 10, B: B +  0, C: C -  0, D: D +  0}),
    honest: ({A, B, C, D}) =>               ({A: A +  0, B: B -  5, C: C + 15, D: D - 10}),
};


export const toolData = {
    capslock: {
        displayName: 'Wielkie litery',
        helpText: 'Napisanie słowa wielkimi literami przyciąga do niego uwagę czytelnika i wzmaga sensacyjny wydźwięk.',
    },
    exclamation: {
        displayName: 'Dodaj wykrzyknik/znak zapytania',
        helpText: 'Wykrzykniki i znaki zapytania (zwłaszcza zwielokrotnione) powodują emocjonalny wydźwięk zdania i przykuwają uwagę.',
    },
    sensationalImage: {
        displayName: 'Modyfikacja obrazka',
        helpText: 'Dodanie intrygujących zdjęć i obrazków przykuwa wzrok i zwiększa klikalność posta.',
    },
    opinionVsFact: {
        displayName: 'Opinia a fakt',
        helpText: 'Przedstawienie opinii w postaci faktu powoduje, że post wydaje się bardziej wiarygodny, ale jest to fałszowaniem informacji.',
    },
    sensationalText: {
        displayName: 'Dodaj sensacyjne hasło',
        helpText: 'Sensacyjne hasła najlepiej przyciągają uwagę! Uważaj, żeby jednak nie przesadzić.',
    },
    emotionalLoad: {
        displayName: 'Nacechowanie emocjonalne',
        helpText: 'Dodanie emocjonalnych słów sprawia, że czytelnik bardziej utożsamia się z informacją.',
    },
    addedLinks: {
        displayName: 'Dodanie rzetelnego źródła',
        helpText: 'Rzetelne źródła uwiarygadniają podawane informacje i zwiększają użyteczność tekstu.',
    },
    ownInterpretation: {
        displayName: 'Dodanie interpretacji',
        helpText: 'Dodanie własnej interpretacji przekazywanych faktów może pomóc w odbiorze newsa, ale trzeba uważać, aby nie zniekształcić pierwotnej informacji.',
    },
    fakeSource: {
        displayName: 'Dodanie fałszywego źrodła',
        helpText: 'Niesprawdzone źródła pokazują, że autor dzieli się treścią, która być może jest fałszywa.',
    },
    misleading: {
        displayName: 'Wprowadzenie w błąd',
        helptext: 'Jest to bardzo negatywna zmiana w tekście, która zniekształca informację i rozpowszechnia nieprawdziwe newsy.',
    },
    honest: {
        displayName: 'Rzetelna informacja',
        helpText: 'Prawdziwe, sprawdzone informacje to prawdziwy skarb - właśnie tego oczekują Twoi czytelnicy.',
    },
    share: {
        displayName: 'Udostępnij w mediach społecznościowych',
        helpText: 'Umożliwienie łatwego dzielenia się informacją w Internecie pomaga newsowi zdobyć popularność.',
    },
};