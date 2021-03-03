import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

export const generateCSV = (header, data) => {
    if (!header || !data) {
        throw new Error("No data was specified to be converted into CSV");
    }

    const csvWriter = createCsvWriter({
        path: 'src/report/currency-report.csv',
        header
    });

    csvWriter.writeRecords(data);
}
