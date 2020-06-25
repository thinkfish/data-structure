export const less = (a, b) => {
    return a - b < 0;
}

export const swap = (a, b) => {
    [a, b] = [b, a]
}