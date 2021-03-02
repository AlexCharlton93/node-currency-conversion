import { reduceArray } from './reduceArray';

describe('reduceArray', () => {
    test('Should return the correct reduced data for an array of objects', async () => {
        const input = [
            { '2021-03-02': 1.1569655109 },
            { '2021-03-01': 1.1552947157 },
            { '2021-02-28': 1.1487254891 },
            { '2021-02-27': 1.1487254891 },
            { '2021-02-26': 1.1487254891 }
        ];

        const expected = {
            '2021-03-02': 1.1569655109,
            '2021-03-01': 1.1552947157,
            '2021-02-28': 1.1487254891,
            '2021-02-27': 1.1487254891,
            '2021-02-26': 1.1487254891
        }

        const res = await reduceArray(input);
        return expect(res).toEqual(expected);
    });
});
