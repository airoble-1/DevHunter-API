module.exports = {
  query: `likesByUser: [Like!]`,

  resolver: {
    Query: {
      likesByUser: {
        description: "Return a list of likes by current user",
        resolverOf: "application::like.like.find",
        resolver: async (obj, options, { context }) => {
          const { id: userId } = context.state.user;
          console.log(context.state.user);
          // return all likes
          const entity = await strapi.services.like.find();
          const likes = entity.filter((like) => like.user.id === userId);
          return likes;
        },
      },
    },
  },
};
