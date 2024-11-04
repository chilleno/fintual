
# Fintual Test

This project sets up a Test for a Fintual Job using **Node.js**. Follow the instructions below to install, configure, and run the code in your development environment.

---

## Table of Contents

- [Fintual Test](#fintual-test)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [1. Clone the Repository](#1-clone-the-repository)
  - [Data Setup](#data-setup)
    - [1. Edit fintual.js](#1-edit-fintualjs)
  - [Running the Project](#running-the-project)
  - [License](#license)

---

## Requirements

Make sure the following tools are installed on your machine:

- **Node.js**: Install the latest stable version of Node.js. You can download it from [here](https://nodejs.org/).

---

## Installation

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```sh
git clone https://github.com/chilleno/fintual.git
cd fintual
```

---

## Data Setup

### 1. Edit fintual.js

change lines 4 and 5 of fintual.js file to add Stocks as needed like the next example

```sh
//portfolio.addStock("stock-name", amout);
portfolio.addStock("AAPL", 10);
```

change the date range in the line 7

```sh
//await portfolio.profit(new Date("date from"), new Date("date from to")) 
await portfolio.profit(new Date("2023-01-01 00:00:00"), new Date("2023-12-29 00:00:00")) 
```
NOTE1: date need the time for better results
NOTE2: the code uses Yahoo stocks api that takes the near date of the given date, this can give differences in the results please check the showed values

---

## Running the Project

Once all dependencies are installed and the Prisma client is generated, you can start the bot in development mode using the following command:

```sh
pnpm dev
```

This will start the bot locally, allowing you to test its functionality.

---

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to use, modify, and distribute as per the terms of the license.

---