const productionConnection = (env) => {
  return {
    client: "postgres",
    connection: {
      host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
    },
    pool: {
      min: 0,
      max: 15,
      idleTimeoutMillis: 30000,
      createTimeoutMillis: 3000,
      acquireTimeoutMillis: 3000,
    },
  };
};

const devConnection = (env) => {
  return {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "fishmyspotcms"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "root"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  };
};

module.exports = ({ env }) => ({
  connection: productionConnection(env),
});
