module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://postgres:docker@localhost:5432/supra_sched_db_test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres:docker@localhost:5432/supra_sched_db',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
};