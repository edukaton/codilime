export const metricApply = {
    capslock: ({A, B, C}) => ({A: A+20, B: B-10, C: C-15})
};

export const metricUnApply = {
    capslock: ({A, B, C}) => ({A: A-20, B: B+10, C: C+15})
};