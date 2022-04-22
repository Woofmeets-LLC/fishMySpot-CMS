const productionConnection = (env) => {
  return {
    client: 'postgres',
    connection: {
        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD'),
    },
    pool: {
      min: 0,
      max: 15, 
      idleTimeoutMillis: 30000,
      createTimeoutMillis: 3000,
      acquireTimeoutMillis: 3000
    }
  }   
}

module.exports = ({ env }) => ({
  connection: productionConnection(env),
})