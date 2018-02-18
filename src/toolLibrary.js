export const metricApply = {
    capslock: ({A, B, C, D}) => ({A: A+20, B: B-10, C: C-15, D}),
    exclamation: ({A, B, C, D}) => ({A: A-30, B: B+10, C: C+25, D}),
};

export const metricUnApply = {
    capslock: ({A, B, C, D}) => ({A: A-20, B: B+10, C: C+15, D}),
    exclamation: ({A, B, C, D}) => ({A: A+30, B: B-10, C: C-25, D}),
};


export const toolData = {
    capslock: {
        displayName: 'Caps Lock',
        helpText: 'WTEEDY JEST MOCNO I DOBRZE WIADOMO',
    },
    exclamation: {
        displayName: 'Wykrzykniki / dodatkowe znaki zapytania w tytule',
        helpText: '!!!! Bo to ważne !!! ! ! ',
    },
    rescaledImage: {
        displayName: 'Skalowanie obrazka',
        helpText: 'helptext przeskalowania zdjęcia',
    },
    modifiedImage: {
        displayName: 'Modyfikacja obrazka',
        helpText: 'helptext zmodyfikowanego zdjęcia',
    },
    opinionVsFact: {
        displayName: 'Opinia vs fakt',
        helpText: 'helptext opinii vs faktu',
    },
    sensationalText: {
        displayName: 'Sensacyjne hasło',
        helpText: 'helptext sensacyjnego hasła',
    },
    emotionalLoad: {
        displayName: 'Nacechuj emocjonalnie',
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
};