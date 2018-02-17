export const metricApply = {
    capslock: ({A, B, C, D}) => ({A: A+20, B: B-10, C: C-15, D}),
    exclamation: ({A, B, C, D}) => ({A: A-30, B: B+10, C: C+25, D}),
};

export const metricUnApply = {
    capslock: ({A, B, C, D}) => ({A: A-20, B: B+10, C: C+15, D}),
    exclamation: ({A, B, C, D}) => ({A: A+30, B: B-10, C: C-25, D}),
};