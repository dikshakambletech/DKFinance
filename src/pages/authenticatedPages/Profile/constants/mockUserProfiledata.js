// added dummy data for user profile & stocks info
// todo : this is temporary and will be replaced by api call to server which will fetch data from DB
export const mockProfileData = {
  id: 1,
  sub: '1',
  totalInvestmentValue: 123,
  investmentValues: [
    {
      id: 5,
      sub: '5',
      dateTime: 'string',
      value: 55,
    },
  ],
  stocks: {
    id: 2,
    sub: '2',
    currentTotalAmount: 222,
    oldestStock: 'someold',
    newestStock: 'somenew',
    stockWithMostShares: 'mostshare',
    highestInvestmentStock: 'highstock',
    userStock: [
      {
        id: 3,
        sub: '3',
        symbol: 'symb',
        entryValuePerShare: 100,
        numberOfShares: 100,
        totalValueOfShares: 10000,
        firstBought: 'string',
        lastBought: 'string',
        details: {
          id: 4,
          name: '4',
          symbol: 'symn',
          marketValuePerShare: 444,
        },
      },
    ],
  },
  cryptos: null,
  commodities: null,
};
