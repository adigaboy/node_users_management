const db = require('../db/index')

;(async () => {
  try {
    await db.schema.hasTable('users').then(
      exists => {
        if (!exists) {
          db.schema.withSchema('public').createTable('users', (table) => {
            table.increments('user_id')
            table.string('name')
            table.string('email')
            table.string('password')
          });
          console.log('Created users table!')
        } else {
          console.log('users table exsits')
        }
      })
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()