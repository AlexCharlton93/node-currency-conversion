import axios from 'axios';

export const getRateData = async (date) => {
    try {
        const { data } = await axios.get(`https://api.ratesapi.io/api/${date}?symbols=EUR,USD,AUD&base=GBP`);
        return data;
    } catch (e) {
        return [];
    }
}
