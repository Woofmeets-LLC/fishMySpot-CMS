const { default: axios } = require("axios");
var createError = require("http-errors");

module.exports = {
  async beforeCreate(event) {
    try {
      let result = await axios.post(
        `${process.env.BACKEND_URL}/giftcards/discount`,
        {
          amount: event.params.data.amount,
          valid: event.params.data.valid,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
          },
        }
      );
      event.params.data.coupon = result?.data?.promo;
    } catch (err) {
      throw createError(400, "Failed to generate coupon code");
    }
  },
  async beforeUpdate(event) {
    const { coupon } = event.params.data;
    try {
      await axios.get(`${process.env.BACKEND_URL}/giftcards/${coupon}`, {
        headers: {
          Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
        },
      });
    } catch (err) {
      throw createError(403, "You are not allowed to modify coupon code.");
    }
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

    axios
      .post(
        `${process.env.BACKEND_URL}/giftcards/discount/invalidate`,
        {
          coupons: deletedCoupons,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
          },
        }
      )
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err?.message));
  },
};
