import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

export const generateCSV = (header, data) => {
    const csvWriter = createCsvWriter({
        path: 'src/report/currency-report.csv',
        header
    });

    csvWriter.writeRecords(data);
}
