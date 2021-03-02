export const reduceArray = (data) => {
    return data.reduce(((result, current) => Object.assign(result, current)), {});
}
