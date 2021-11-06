"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    // check if user exists
    const { user } = ctx.state;
    if (!user) ctx.throw(401, "User account doesn't exist");
    // check if project selected exists
    const { project: projectId } = ctx.request.body;
    const project = await strapi.services.project.findOne({ id: projectId });
    if (!project) ctx.throw(401, "Project does not exist");
    // check for like using current user and project id and fineOne endpoint
    const isLiked = await strapi.services.like.findOne({
      user: user.id,
      project: projectId,
    });
    // if like doesn't exsit send data to create endpoint and increase likecount
    if (!isLiked) {
      await strapi.services.project.update(
        { id: projectId },
        { likesCount: project.likesCount + 1 }
      );
      const entity = await strapi.services.like.create({
        project: projectId,
        user: user.id,
      });
      return sanitizeEntity(entity, { model: strapi.models.like });
    }
  },
  async delete(ctx) {
    // check if user exists
    const { user } = ctx.state;
    if (!user) ctx.throw(401, "User account doesn't exist");
    const {
      input: {
        where: { id },
      },
    } = ctx.request.body;
    const entity = await strapi.services.like.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.like });
  },
};
