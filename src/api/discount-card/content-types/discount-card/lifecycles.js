const { default: axios } = require("axios");

module.exports = {
  async beforeCreate(event) {
    let result = await axios.post(
      `${process.env.BACKEND_URL}/giftcards/discount`,
      {
        amount: event.params.data.amount,
        valid: event.params.data.valid,
      }
    );
    event.params.data.coupon = result?.data?.promo;
  },
  async beforeUpdate(event) {
    const { coupon } = event.params.data;
    console.log({ event, coupon });
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/giftcards/${coupon}`
    );
  },
  async beforeDeleteMany(event) {
    const deletedIds = event.params.where["$and"].map(
      (item) => item?.id?.["$in"]
    )[0];
    const entries = await strapi.db
      .query("api::discount-card.discount-card")
      .findMany({
        where: {
          id: {
            $in: deletedIds,
          },
        },
        select: ["coupon"],
      });
    const deletedCoupons = entries.map((entry) => entry.coupon);

    await axios
      .post(`${process.env.BACKEND_URL}/giftcards/discount/invalidate`, {
        coupons: deletedCoupons,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  },
};
