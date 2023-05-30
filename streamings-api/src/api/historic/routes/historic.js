'use strict';

/**
 * historic router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::historic.historic');
