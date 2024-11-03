export class Stock {
    name;
    shares;

    constructor(name, shares) {
        this.name = name;
        this.shares = shares;
    }

    async getPrice(date) {
        //transform date to unix timestamp
        const period1 = Math.floor(date.getTime() / 1000);
        //add 3 days to the date and transform it to unix timestamp because the API requires a range of dates
        const period2 = Math.floor(date.setDate(date.getDate() + 3) / 1000);

        //fetch the stock data from Yahoo Finance API
        const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${this.name}?period1=${period1}&period2=${period2}&interval=1d&filter=history&frequency=1d`);
        const data = await response.json();
        const value = data.chart.result[0].indicators.quote[0].close[0];
        return value;
    }
}
