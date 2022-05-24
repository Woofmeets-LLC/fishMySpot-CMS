'use strict';

/**
 * gift-card service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gift-card.gift-card');
