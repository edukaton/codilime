export const metricApply = {
    capslock: ({A, B, C, D}) => ({A: A + 20, B: B - 10, C: C - 15, D}),
    exclamation: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    sensationalImage: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    sensationalText: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    addedLinks: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    ownInterpretation: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    fakeSource: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    misleading: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    share: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    opinionVsFact: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
    emotionalLoad: ({A, B, C, D}) => ({A: A - 30, B: B + 10, C: C + 25, D}),
};

export const metricUnApply = {
    capslock: ({A, B, C, D}) => ({A: A - 20, B: B + 10, C: C + 15, D}),
    exclamation: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    sensationalImage: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    sensationalText: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    addedLinks: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    ownInterpretation: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    fakeSource: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    misleading: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    cherryPicking: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    share: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    opinionVsFact: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
    emotionalLoad: ({A, B, C, D}) => ({A: A + 30, B: B - 10, C: C - 25, D}),
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
        displayName: 'Dodaj snsacyjne hasło',
        helpText: 'helptext sensacyjnego hasła',
    },
    emotionalLoad: {
        displayName: 'Nacechowanie emocjonalne',
        helpText: 'helptext nacechowania emocjonalnego',
    },
    addedLinks: {
        displayName: 'Dodaj linki',
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
        displayName: 'Wprowadzanie w błąd',
        helptext: 'help help help',
    },
    cherryPicking: {
        displayName: 'Wybiórczość w doborze faktów',
        helpText: 'Wybiórczość helptext',
    },
    share: {
        displayName: 'Udostępnij w mediach społecznościowych',
        helpText: 'Share helptext',
    },

};