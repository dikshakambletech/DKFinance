export const investmentListServices = (type: 'stock' | 'crypto' | 'commodities') => {

  return fetch(`${process.env.REACT_APP_SERVER_URL}/${type}-list/`)
    .then((res) => res.json());
};

export const stockListServices = () => {

  return fetch(`${process.env.REACT_APP_SERVER_URL}/stock-list/`)
    .then((res) => res.json());
};