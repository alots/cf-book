import settings from "../config/settings";

export const calcFee = (price) => {
  return price * settings.bookPriceFee;
};

export const calcAuthorEarns = (price) => {
  return price - calcFee(price);
};
