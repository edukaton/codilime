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
        helpText: 'helptext wielkich liter',
    },
    exclamation: {
        displayName: 'Dodaj wykrzyknik/znak zapytania',
        helpText: 'helptext wykrzykników',
    },
    sensationalImage: {
        displayName: 'Modyfikacja obrazka',
        helpText: 'helptext modyfikacji zdjęcia',
    },
    modifiedImage: {
        displayName: 'Modyfikacja obrazka',
        helpText: 'helptext zmodyfikowanego zdjęcia',
    },
    opinionVsFact: {
        displayName: 'Opinia a fakt',
        helpText: 'helptext opinii vs faktu',
    },
    sensationalText: {
        displayName: 'Dodaj sensacyjne hasło',
        helpText: 'helptext sensacyjnego hasła',
    },
    emotionalLoad: {
        displayName: 'Nacechowanie emocjonalne',
        helpText: 'helptext nacechowania emocjonalnego',
    },
    addedLinks: {
        displayName: 'Dodanie rzetelnego źródła',
        helpText: 'helptext linków',
    },
    ownInterpretation: {
        displayName: 'Dodanie interpretacji',
        helpText: 'helptext dodania interpretacji',
    },
    fakeSource: {
        displayName: 'Dodanie fałszywego źrodła',
        helpText: 'helptext dodania interpretacji',
    },
    misleading: {
        displayName: 'Wprowadzenie w błąd',
        helptext: 'help help help',
    },
    honest: {
        displayName: 'Rzetelna informacja',
        helpText: 'Rzetelny helptext',
    },
    share: {
        displayName: 'Udostępnij w mediach społecznościowych',
        helpText: 'Share helptext',
    },
};