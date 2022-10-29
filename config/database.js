module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "containers-us-west-57.railway.app"),
        port: env.int("DATABASE_PORT", 7369),
        /*
        for security reasons typically these will come from node environment variables.
        the dev credentials should be stored with the project, prod credentials should be stored on the server
        */
        database: env("DATABASE_NAME", "railway"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "SkeF2ClIuQuWqQB31sLg"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
