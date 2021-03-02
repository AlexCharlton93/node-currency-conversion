import moment from 'moment';

export const getPreviousDates = (amountOfDays) => {
    const dates = [];
    for (let i = 0; i < amountOfDays; i++) {
        dates.push(moment(new Date().setDate(new Date().getDate() - i)).format('YYYY-MM-DD'));
    }

    return dates;
}
