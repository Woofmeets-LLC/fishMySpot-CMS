const { default: axios } = require("axios");

module.exports = {
  async beforeCreate(event) {
    let result = await axios.post("http://localhost:5000/giftcards/discount", {
      amount: event.params.data.amount,
    });

    event.params.data.coupon = result?.data?.promo;
  },
};
