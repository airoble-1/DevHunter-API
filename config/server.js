module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      // should probably come from node environment variable
      secret: env("ADMIN_JWT_SECRET", "74f0ddd3b18aac6490c8eaf5dd6a9591"),
    },
  },
});
