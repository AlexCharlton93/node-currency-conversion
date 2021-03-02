import { getPreviousDates } from './util/getPreviousDates';
import { getRateData } from './util/getRateData';
import { generateCSV } from './util/generateCSV';
import { reduceArray } from './util/reduceArray';

export const getCurrencyConversionReport = async () => {
  try {
    const previous5Dates = getPreviousDates(5);

    const headers = [], EUR = [], AUD = [], USD = [];
    await previous5Dates.reduce(async (promise, date) => {
      await promise;
      const rateData = await getRateData(date);
      
      headers.push({id: date, title: date});
      EUR.push({[date]: rateData.rates.EUR});
      AUD.push({[date]: rateData.rates.AUD});
      USD.push({[date]: rateData.rates.USD});
    }, Promise.resolve());

    const EURData = reduceArray(EUR);
    const AUDData = reduceArray(AUD);
    const USDData = reduceArray(USD);

    const data = [
      EURData,
      AUDData,
      USDData
    ];

    generateCSV(headers, data);
  } catch (e) {
    console.log("e", e);
  }
}
