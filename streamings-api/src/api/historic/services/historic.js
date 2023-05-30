'use strict';

/**
 * historic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::historic.historic');
