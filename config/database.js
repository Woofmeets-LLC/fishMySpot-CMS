const productionConnection = (env) => {
  return {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: {
        rejectUnauthorized: false,
      },
      schema: env("DATABASE_SCHEMA", "public"),
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
      connectionString: env("DATABASE_URL"),
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: {
        rejectUnauthorized: false,
      },
      schema: env("DATABASE_SCHEMA", "public"),
    },
  };
};

module.exports = ({ env }) => ({
  connection:
    env("NODE_ENV") === "production"
      ? productionConnection(env)
      : devConnection(env),
});
