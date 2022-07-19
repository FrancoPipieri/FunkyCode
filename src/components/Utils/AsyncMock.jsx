import data from './data.json';

export const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        data.find(
          (item) => item.id === id
        )
      );
    }, 2000);
  });
};