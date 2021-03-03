import moment from 'moment';

export const getPreviousDates = (amountOfDays) => {
    if (!amountOfDays) {
        throw new Error("Please specify the amount of days data to obtain");
    }

    const dates = [];
    for (let i = 0; i < amountOfDays; i++) {
        dates.push(moment(new Date().setDate(new Date().getDate() - i)).format('YYYY-MM-DD'));
    }

    return dates;
}
