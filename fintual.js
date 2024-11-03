import { Portfolio } from "./classes/Portolio.js";

const portfolio = new Portfolio("My portfolio", []);
portfolio.addStock("AAPL", 10);
portfolio.addStock("GOOGL", 5);

await portfolio.profit(new Date("2023-01-01 00:00:00"), new Date("2023-12-29 00:00:00"))