const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'postgres',
    password: '12345',
    database: 'postgres',
  },
});

