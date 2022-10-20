exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username').unique().notNullable()
    table.string('email')
    table.string('password').notNullable()
    table.boolean('admin').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
