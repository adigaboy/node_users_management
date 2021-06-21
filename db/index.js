const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'lytx',
    password: '12345',
    database: 'postgres',
  },
});

