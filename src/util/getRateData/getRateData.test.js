import { getRateData } from './getRateData';

describe('getRateData', () => {
    test('Should return the correct data for a given date', async () => {
        const input = '2020-03-03';

        const expected = {
            base: "GBP",
            date: "2020-03-03",
            rates: {
                AUD: 1.9435697046,
                EUR: 1.1492931847,
                USD: 1.2776692334,
            },
        };

        const res = await getRateData(input);
        return expect(res).toEqual(expected);
    });
});
