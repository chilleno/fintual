import { Stock } from './Stock.js';

export class Portfolio {
    /**
     * @type {string}
     * @description The name of the portfolio.
     */
    name;
    /**
     * @type {Stock[]}
     * @description The stocks in the portfolio.
     */
    stocks;

    constructor(name, stocks) {
        this.name = name;
        this.stocks = stocks;
    }

    addStock(stock, shares) {
        this.stocks.push(new Stock(stock, shares));
    }

    async profit(startDate, endDate) {
        let startDateFormatted = startDate.toISOString().split('T')[0];
        let endDateFormatted = endDate.toISOString().split('T')[0];

        console.log('=================================================');
        console.log(`Calculating profit from ${startDateFormatted} to ${endDateFormatted}...`, '');
        console.log('================================================= \n');
        let profit = 0;
        for (const stock of this.stocks) {
            console.log(`Getting price for ${stock.name}... \n`);

            const startPrice = await stock.getPrice(startDate);
            console.log(`Price on ${startDateFormatted}: ${startPrice.toFixed(2)}`);

            const endPrice = await stock.getPrice(endDate);
            console.log(`Price on ${endDateFormatted}: ${endPrice.toFixed(2)}`);

            let priceIncrease = (endPrice - startPrice).toFixed(2);
            console.log(`Price increase: ${priceIncrease} \n`);

            let profitValue = Number((stock.shares * priceIncrease).toFixed(2));
            console.log(`Total profit from ${stock.shares} ${stock.name} shares: ${stock.shares} shares x ${priceIncrease} = ${profitValue} \n`);

            let milisecondsPerYear = 1000 * 60 * 60 * 24 * 365;
            
            //get amount of years between the two given dates to calculate the annual return of the investment
            let years = (endDate - startDate) / milisecondsPerYear;
            let beginningValue = stock.shares * startPrice; // Initial investment
            let endingValue = stock.shares * endPrice; // Total value at end
            let annualReturn = ((endingValue / beginningValue) ** (1 / years) - 1).toFixed(2);
            
            console.log(`Annual return: ${annualReturn} on ${years.toFixed(2)} years \n`);

            console.log('================================== \n');

            profit += profitValue;
        }
        console.log(`Total profit: ${profit}`);

    }

}