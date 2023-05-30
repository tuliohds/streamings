'use strict';

/**
 * historic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::historic.historic');
